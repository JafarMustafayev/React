export const Email_Regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

export const Phone_Regex =
  /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

export const Password_Regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
