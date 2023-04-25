export const validateEmail = (email) => {
  try {
    let regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let result = regex.exec(email);
    return result;
  } catch (error) {
    console.log("validateEmail error", error);
    return error;
  }
};

export const validateNumber = (number) => {
  try {
    let regex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    let result = regex.test(number);
    return result;
  } catch (error) {
    console.log("validateNumber error", error);
    return error;
  }
};

export function isJsonString(stringValue) {
  try {
    JSON.parse(stringValue);
  } catch (e) {
    return false;
  }
  return true;
}
