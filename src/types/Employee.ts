export class Employee {
  constructor(private _name1: string) {}
  public get name1(): string {
    return this._name1;
  }

  public set name1(name1: string) {
    this._name1 = name1;
  }
}
