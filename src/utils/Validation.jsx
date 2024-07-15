export const Validation = (email, password) => {
  const isEmailCorrect =
    /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const isPasswordCorrect =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password);

  if (!isEmailCorrect) return "Invalid E-mail. Please enter another one";
  if (!isPasswordCorrect)
    return "Invalid Password. Try again or enter a new one";

  return null;
};
