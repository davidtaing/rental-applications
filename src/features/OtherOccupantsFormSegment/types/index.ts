export interface OtherOccupant {
  fullname: string;
  relation: string;
  age: number;
  gender: string;
}

export interface OtherOccupantsFormState {
  otherOccupants: Array<OtherOccupant>;
}
