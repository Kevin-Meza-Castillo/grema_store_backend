export interface Users {
  id: number;
  name: string;
  lastName: string;
  age: number;
  genre: string;
  email: string;
  password: string;
  address: string;
}

export interface ProfilePassword {
  id : number
  email : string,
  password : string
}

export interface ResponseUser {
  success?: string | undefined;
  status?: number;
  msg?: string;
  data?: Object | undefined;
  info?: string | undefined;
  error?: string | undefined;
  validate?: boolean | undefined;
}

export enum keysToValidateUserCreate {
  id = "id",
  name = "name",
  lastName = "lastName",
  age = "age",
  genre = "genre",
  email = "email",
  password = "password",
  address = "address",
}
export enum keysToValidateProfilePassword {
  id = "id",
  email = "email",
  password = "password"
}
