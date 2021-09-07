import { compare, hash } from 'bcrypt';

// hash a password
export const hashPass = async (pass: string) => await hash(pass, 10);

//compare a pass with its possible hash
export const comparePass = async (pass: string, hash: string) =>
  await compare(pass, hash);

export const isDuplicateErr = (e: any) => {
  if (e.name === 'MongoServerError' && e.code === 11000) return true;
  return false;
};
