export * from "./validationSchema";
import { PetType, PetCategory, PetsFormState } from "../types";

export const createPetCategory = (): PetCategory => ({
  type: PetType.DOG,
  amount: 1,
  comment: "",
});

export const initPetsFormState = (): PetsFormState => ({
  pets: new Array<PetCategory>(),
});
