export class ProfileDTO {
  constructor(
    public username: string,
    public name: string,
    public surname: string,
    public email: string,
    public grade: string,
    public profileImg: string
  ) {
  }
}
