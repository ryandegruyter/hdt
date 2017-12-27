export class User {
  private uid: string;
  private displayName: string;
  private loading?: boolean;
  private error?: boolean;

  constructor(uid: string, displayName: string) {
    this.uid = uid;
    this.displayName = displayName;
  }
}
