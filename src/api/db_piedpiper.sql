-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 28, 2018 at 08:53 AM
-- Server version: 5.7.23-0ubuntu0.18.04.1
-- PHP Version: 7.2.7-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_piedpiper`
--



-- --------------------------------------------------------

--
-- Table structure for table `accesslogs`
--

CREATE TABLE `accesslogs` (
  `id` int(11) NOT NULL,
  `log_in` datetime DEFAULT NULL,
  `log_off` datetime DEFAULT NULL,
  `address` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `name` varchar(16) DEFAULT NULL,
  `surname` varchar(32) DEFAULT NULL,
  `email` varchar(128) NOT NULL,
  `grade` INT NOT NULL DEFAULT 4,
  `profileImg` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `username`, `name`, `surname`, `email`, `grade`, `profileImg`) VALUES
(3, 'Tempalte Root', 'Crash', 'Override', 'hack.the.planet', 0, 'https://pbs.twimg.com/profile_images/475425883914649600/y9sA7OnM_400x400.jpeg'),
(4, 'Template Manutentore', 'Mario', 'Rossi', 'm.rossi', 2, 'http://ewic.org/wp-content/themes/ewic/images/Construction%20Worker.png'),
(5, 'Template Supervisore', 'Luisa', 'Verdi', 'l.verdi', 1, 'https://static1.squarespace.com/static/57d3c6eff5e231385725f413/t/58986a9986e6c0c6ce7ee861/1486383774142/'),
(6, 'Template User', 'Dummy', 'User', 'd.user', 4, 'http://ammirehaulage.com/uploads/users/dummy-user-img.png');
-- --------------------------------------------------------

--
-- Table structure for table `establishments`
--

CREATE TABLE `establishments` (
  `id` int(11) NOT NULL,
  `address` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `establishments`
--

INSERT INTO `establishments` (`id`, `address`, `name`) VALUES
(1, 'address1', 'Angus');

-- --------------------------------------------------------

--
-- Table structure for table `machines`
--

CREATE TABLE `machines` (
  `id` int(11) NOT NULL,
  `production_line_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `sector` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `machines`
--

INSERT INTO `machines` (`id`, `production_line_id`, `name`, `sector`) VALUES
(1, 1, 'pompa acqua', 'prelavaggio'),
(3, 1, 'pompa', 'lavaggio'),
(4, 1, 'contatore acqua', 'lavaggio'),
(5, 1, 'ventilatore', 'asciugatura'),
(2, 1, 'contatore acqua', 'prelavaggio'),
(6, 1, 'contatore acqua', 'asciugatura'),
(7, 2, 'vasca pre trattamento', 'vasca pre trattamento'),
(8, 2, 'vasca primer', 'vasca primer'),
(9, 2, 'vasca finisher', 'vasca finisher'),
(10, 3, 'motore 1', 'impilatore'),
(11, 3, 'motore 2', 'impilatore');

-- --------------------------------------------------------

--
-- Table structure for table `production_lines`
--

CREATE TABLE `production_lines` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `establishment_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `production_lines`
--

INSERT INTO `production_lines` (`id`, `name`, `establishment_id`) VALUES
(1, 'Sezione lavaggio', 1),
(2, 'Sezione pretrattamento', 1),
(1, 'Sezione lavaggio', 1),
(2, 'Sezione pretrattamento', 1),
(3, 'Sezione stoccaggio', 1),
(3, 'Sezione stoccaggio', 1);

-- --------------------------------------------------------

--
-- Table structure for table `sensors`
--

CREATE TABLE `sensors` (
  `id` int(11) NOT NULL,
  `machine_id` int(11) NOT NULL,
  `type` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sensors`
--

INSERT INTO `sensors` (`id`, `machine_id`, `type`) VALUES
(1, 1, 'temperatura'),
(2, 2, 'livello acqua'),
(3, 3, 'temperatura'),
(4, 4, 'livello acqua'),
(5, 5, 'temperatura'),
(6, 6, 'umidita'),
(7, 7, 'livello acqua'),
(8, 7, 'pH'),
(9, 8, 'livello acqua'),
(10, 8, 'pH'),
(11, 9, 'livello acqua'),
(12, 9, 'pH'),
(13, 1, 'corrente assorbita'),
(14, 1, 'numero giri'),
(15, 1, 'ore di lavoro'),
(16, 3, 'corrente assorbita'),
(17, 3, 'numero giri'),
(18, 3, 'ore di lavoro'),
(19, 5, 'corrente assorbita'),
(20, 5, 'numero giri'),
(21, 5, 'ore di lavoro'),
(22, 10, 'corrente assorbita'),
(23, 10, 'numero giri'),
(24, 10, 'ore di lavoro'),
(25, 11, 'corrente assorbita'),
(26, 11, 'numero giri'),
(27, 11, 'ore di lavoro');

-- --------------------------------------------------------

--
-- Table structure for table `shadow`
--

CREATE TABLE `shadow` (
  `id` int(11) NOT NULL UNIQUE,
  `passwd` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `shadow`
--

INSERT INTO `shadow` (`id`, `passwd`) VALUES
(3, '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9'), # 123456
(4, '*AC3FA331273331FB73B4933506CA9FF075D6EC5B'), # qwerty
(5, '*960FECDC3DF94390AE7E6883F74FBD4DD7BF9694'), # asdfgh
(6, '*BE5B0C03D1581AC0961C9C0267428F28167FED54'); # zxcvbn

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shadow`
--
ALTER TABLE `shadow`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
