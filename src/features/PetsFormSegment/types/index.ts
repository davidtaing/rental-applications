export enum PetTypes {
  DOG = "Dog",
  CAT = "Cat",
  BIRD = "Bird",
  OTHER = "Other",
}

export interface PetCategory {
  type: PetTypes;
  amount: number;
  comment: string;
}

export interface PetsFormState {
  pets: Array<PetCategory>;
}
