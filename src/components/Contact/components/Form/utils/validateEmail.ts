export const regEx = {
  float: /^(\d+(\.\d+)?)$/,
  text: /^[A-Za-z\s]*$/,
  textWithNumbers: /^[A-Za-z0-9\s]*$/,
  number: /^(\d+)$/,
  note: /(\w+)$/,
  email:
    /^[A-Za-z0-9]+?([A-Za-z0-9_\-.]+)[A-Za-z0-9-_]+[@]+[A-Za-z0-9]+?([A-Za-z0-9.]+)[.]([a-z]+)$/,
  fullPhone: /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{9})$/,
  phone: /(\d[0-9]{8,9})$/,
  hasNumber: /^(.*[0-9])/,
  hasLowerCase: /^(.*[a-z])/,
  hasUpperCase: /^(.*[A-Z])/,
  southAfricanId:
    /(((\d{2}((0[13578]|1[02])(0[1-9]|[12]\d|3[01])|(0[13456789]|1[012])(0[1-9]|[12]\d|30)|02(0[1-9]|1\d|2[0-8])))|([02468][048]|[13579][26])0229))(( |-)(\d{4})( |-)(\d{3})|(\d{7}))/,
  noArabic: /^[^\u0600-\u06FF]*$/,
};
const isEmail = (email: string) => regEx.email.test(email);

export default isEmail;
