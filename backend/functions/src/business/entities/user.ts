export default class User {
  constructor(
    private name: string,
    private email: string,
    private birthDate: string,
    private picture: string,
    private password: string
  ) { }
  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public getBirtDate(): string {
    return this.birthDate
  }

  public getPicture(): string {
    return this.picture;
  }

  public getPassword(): string {
    return this.password;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setEmail(email: string): void {
    this.email = email;
  }

  public setPassword(password: string): void {
    this.password = password;
  }

}