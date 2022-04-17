import { OtherOccupant } from "../types";

export function initOtherOccupantsFormState() {
  return {
    otherOccupants: new Array<OtherOccupant>(),
  };
}

export function createOtherOccupant(): OtherOccupant {
  return {
    fullname: "",
    relation: "",
    age: 0,
    gender: "male",
  };
}
