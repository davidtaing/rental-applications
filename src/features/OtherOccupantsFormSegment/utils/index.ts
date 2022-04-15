import { OtherOccupant } from "../types";

export function initOtherOccupantsState() {
  return {
    otherOccupants: new Array<OtherOccupant>(),
  };
}
