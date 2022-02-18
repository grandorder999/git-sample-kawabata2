export class Employee {
  constructor(private _name2: string) {}

  public get name2(): string {
    return this._name2;
  }

  public set name2(name2: string) {
    this._name2 = name2;
  }
}
