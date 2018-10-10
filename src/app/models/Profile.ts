export class ProfileDTO {
  /*
  private _username: string;
  private _name: string;
  private _surname: string;
  private _email: string;
  private _grade: number;
  private _profileImg: string;

  constructor(username: string, name: string, surname: string, email: string, grade: number, profileImg: string) {
    this._username = username;
    this._name = name;
    this._surname = surname;
    this._email = email;
    this._grade = grade;
    this._profileImg = profileImg;
  }

  get username(): string {
    return this._username;
  }

  get name(): string {
    return this._name;
  }

  get surname(): string {
    return this._surname;
  }

  get email(): string {
    return this._email;
  }

  get grade(): number {
    return this._grade;
  }

  get gradeName(): string {
    switch (this._grade) {
      case 0:
        return 'root';
      case 1:
        return 'Supervisore';
      case 2:
        return 'Manutentore';
      case 3:
        return 'user';
      default:
        return null;
    }
  }

  get profileImg(): string {
    return this._profileImg;
  }
  */


  constructor(
    public username: string,
    public name: string,
    public surname: string,
    public email: string,
    public grade: number,
    public profileImg: string
  ) {
  }
}
