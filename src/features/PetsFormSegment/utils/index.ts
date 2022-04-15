import { PetTypes, PetCategory, PetsFormState } from "../types";

export const initPetState = (): PetCategory => ({
  type: PetTypes.DOG,
  amount: 1,
  comment: "",
});

export const initPetsFormState = (): PetsFormState => ({
  pets: new Array<PetCategory>(),
});
