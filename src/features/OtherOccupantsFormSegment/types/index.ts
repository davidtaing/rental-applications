export interface OtherOccupant {
  fullname: string;
  relation: string;
  age: number;
  gender: string;
}

export interface OtherOccupantsFormState {
  otherOccupants: Array<OtherOccupant>;
}

export enum OtherOccupantRelation {
  SPOUSE_OR_SO = "Spouse/Significant Other",
  CHILD = "Child",
  PARENT = "Parent",
  SIBLING = "Sibling",
  GRANDPARENT = "Grandparent",
  FRIEND = "Friend",
  HOUSEMATE_OR_FLATMATE = "Housemate/Flatmate",
}
