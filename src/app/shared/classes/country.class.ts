export class Country {
  public initials: string;
  public key: string;
  public fullName: string;

  constructor(initials: string, key: string, fullName: string) {
    this.initials = initials;
    this.key = key;
    this.fullName = fullName;
  }
}