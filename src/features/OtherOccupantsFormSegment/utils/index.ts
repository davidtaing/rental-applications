import { OtherOccupant } from "../types";

export function initOtherOccupantsState() {
  return {
    otherOccupants: new Array<OtherOccupant>(),
  };
}

export function initOtherOccupant(): OtherOccupant {
  return {
    fullname: "",
    relation: "",
    age: 0,
    gender: "male",
  };
}
