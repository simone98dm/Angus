export class ProfileDTO {
  constructor(
    public username: string,
    public name: string,
    public surname: string,
    public email: string,
    public grade: number,
    public profileImg: string
  ) {
  }

  getPermissionName(): string {
    switch (this.grade) {
      case 0:
        return 'root';
      case 1:
        return 'Supervisore';
      case 2:
        return 'Manutentore';
      case 3:
        return 'User';
      default:
        return null;
    }
  }
}
