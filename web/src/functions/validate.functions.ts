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

export const handlerRequestErr = (e: any): string => {
  if (
    e.ServerError &&
    e.ServerError.result &&
    e.ServerError.result.errors &&
    e.ServerError.result.errors[0] &&
    e.ServerError.result.errors[0].message
  ) {
    return e.ServerError.result.errors[0].message;
  }

  if (
    e.networkError &&
    e.networkError.result &&
    e.networkError.result.errors &&
    e.networkError.result.errors[0] &&
    e.networkError.result.errors[0].message
  ) {
    return e.networkError.result.errors[0].message;
  }

  if (!navigator.onLine) {
    return '¡Oh no!, parece que no estás conectado a una red wifi, por favor verifica tu conexión';
  }

  return 'Lo sentimos, ha ocurrido un error inesperado, por favor intenta más tarde';
};
