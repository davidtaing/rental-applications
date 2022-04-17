export enum PetType {
  DOG = "Dog",
  CAT = "Cat",
  BIRD = "Bird",
  OTHER = "Other",
}

export interface PetCategory {
  type: PetType;
  amount: number;
  comment: string;
}

export interface PetsFormState {
  pets: Array<PetCategory>;
}
