export const validateEmail = (email = "") => {
  try {
    if (typeof email === "string") {
      let regex =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let result = regex.exec(email);
      return result;
    } else {
      return "Invalid parameter. Required string!";
    }
  } catch (error) {
    return error;
  }
};

export const validateNumber = (number = 1) => {
  try {
    let regex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    let result = regex.test(number);
    return result;
  } catch (error) {
    return error;
  }
};

export function isJsonString(stringValue = "") {
  try {
    JSON.parse(stringValue);
  } catch (e) {
    return false;
  }
  return true;
}
