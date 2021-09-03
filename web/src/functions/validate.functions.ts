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

export const validateUser = (user: string): boolean => {
  if (user.length < 4) return false;
  return validateBadCharacters(user);
};

export const validatePass = (pass: string): boolean => {
  if (pass.length < 6) return false;

  return true;
};
