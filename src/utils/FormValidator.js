

// i need to check all properties of state and validate them in a method called validateForm

// i need to check if the value of the property is empty or not
const validateForm = (state) => {
  let errors = {};
  for (const key in state) {
    if (state[key] === "") {
      errors[key] = `El campo ${key} no puede estar vacío`;
    }
  }
  return errors;
};

const validatePasswords = (password, confirmPassword) => {
  if (password !== confirmPassword) {
    return { status: false, message: 'Las contraseñas no coinciden' };
  }

  if (password.length < 8) {
    return { status: false, message: 'La contraseña debe tener al menos 8 caracteres' };
  }

  return { status: true, message: '' };
}

export { validateForm, validatePasswords };

