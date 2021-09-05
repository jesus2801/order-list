//validate invalid characters into a string
const validateBadCharacters = (str: string): boolean => {
  if (
    str.indexOf('@') !== -1 ||
    str.indexOf('<') !== -1 ||
    str.indexOf('>') !== -1 ||
    str.indexOf('>') !== -1 ||
    str.indexOf("'") !== -1 ||
    str.indexOf('"') !== -1 ||
    str.indexOf('(') !== -1 ||
    str.indexOf(')') !== -1 ||
    str.indexOf('/') !== -1 ||
    str.indexOf('&') !== -1 ||
    str.indexOf('|') !== -1 ||
    str.indexOf('%') !== -1 ||
    str.indexOf('?') !== -1 ||
    str.indexOf('¿') !== -1 ||
    str.indexOf('¡') !== -1 ||
    str.indexOf('!') !== -1 ||
    str.indexOf('}') !== -1 ||
    str.indexOf('{') !== -1 ||
    str.indexOf('*') !== -1
  ) {
    return false;
  } else {
    return true;
  }
};

//validate a user name
export const validateUser = (user: string): boolean => {
  if (user.length < 4) return false;
  return validateBadCharacters(user);
};

//validate a pass
export const validatePass = (pass: string): boolean => {
  if (pass.length < 6) return false;

  return true;
};
