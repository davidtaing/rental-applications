import { PetTypes, PetCategory, PetsFormState } from "../types";

export const createPetCategory = (): PetCategory => ({
  type: PetTypes.DOG,
  amount: 1,
  comment: "",
});

export const initPetsFormState = (): PetsFormState => ({
  pets: new Array<PetCategory>(),
});
