import moment from "moment";
import { commonMimeTypes } from "./constants";

export const getFileSize = (_size = 1) => {
  try {
    if (typeof _size === "number") {
      var fSExt = new Array("Bytes", "KB", "MB", "GB"),
        i = 0;
      while (_size > 900) {
        _size /= 1024;
        i++;
      }
      var exactSize = Math.round(_size * 100) / 100 + " " + fSExt[i];
      return exactSize;
    } else {
      return "Invalid parameter. Required integer!";
    }
  } catch (error) {
    return error;
  }
};

export const htmlDecode = (input) => {
  try {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
  } catch (error) {
    return error;
  }
};

export const htmlEncode = (input) => {
  try {
    return input.replace(/[\u00A0-\u9999<>\&]/g, function (i) {
      return "&#" + i.charCodeAt(0) + ";";
    });
  } catch (error) {
    return error;
  }
};

export const getRandomNumber = (min = 1, max = 1) => {
  try {
    if (typeof min === "number" && typeof max === "number") {
      return Math.floor(Math.random() * (max - min + 1) + min);
    } else {
      return "Invalid params. Params must be integer!";
    }
  } catch (error) {
    return error;
  }
};

export const uniqueNumberFromString = (stringValue = "", utf16 = false) => {
  try {
    if (typeof stringValue === "string") {
      let results = "";
      const fixedNumber = utf16 ? 10000 : 100;
      for (let i = 0; i < stringValue.length; i++) {
        results += (fixedNumber + stringValue[i].charCodeAt(0)).toString();
      }
      return parseInt(results);
    } else {
      return "Invalid parameter. Required string!";
    }
  } catch (error) {
    return error;
  }
};

export function normalizeGraphFilterForExpress(searchFilters = {}) {
  try {
    let where = "";
    if (typeof searchFilters === "object") {
      Object.entries(searchFilters).forEach(([key, val], index) => {
        const addition = index > 0 ? "," : "";

        if (val !== undefined && val != null) {
          if (typeof val === "string") {
            where += `${addition} ${key}: "${val}"`;
          } else if (
            typeof val === "object" &&
            !Array.isArray(val) &&
            val.getTime()
          ) {
            where += `${addition} ${key}: "${moment(val).format()}"`;
          } else if (
            Array.isArray(val) &&
            (key.includes("_nin") || key.includes("_in"))
          ) {
            where += `${addition} ${key}: [${val.map((x) => {
              return `"${x}"`;
            })}]`;
          } else {
            where += `${addition} ${key}: ${val}`;
          }
        }
      });
    }
    return where;
  } catch (error) {
    return error;
  }
}

export const normalizeAzPhoneNumber = (number = "") => {
  try {
    if (typeof number === "string") {
      let cn = number || "";
      let result = "";
      if (cn.startsWith("+994")) {
        result = cn.replace("+994", "0");
        if (result.startsWith("012")) {
          result = result.replace("012", "");
        }
      } else {
        result = cn.replace("+", "");
      }
      return result;
    } else {
      return "Invalid parameter. Required string!";
    }
  } catch (error) {
    return error;
  }
};

export const normalizeAz9DigitNumber = (number = "") => {
  try {
    if (typeof number === "string") {
      let cn = number || "";
      let result = "";
      if (
        (cn.startsWith("+") && !cn.startsWith("+994")) ||
        (cn.length > 10 && !cn.startsWith("+") && !cn.startsWith("994"))
      ) {
        result = cn.replace("+", "");
      } else if (cn.length > 7) {
        result = cn.substr(cn.length - 9, 9);
      } else {
        result = cn.replace("+", "");
      }
      return result;
    } else {
      return "Invalid parameter. Required string!";
    }
  } catch (error) {
    return error;
  }
};

export const extractNumberFromTime = (timeValue) => {
  try {
    let result = 0;
    if (timeValue.includes(":")) {
      let arr = timeValue.split(":");
      let firstItem = arr[0];

      if (firstItem.toString().startsWith("0")) {
        result = firstItem.substr(1, 2);
      } else {
        result = firstItem;
      }
    }
    return Number(result);
  } catch (error) {
    return error;
  }
};

export const calculatePercentageOfNumber = (number = 1, percentage = 1) => {
  try {
    if (typeof number === "number" && typeof percentage === "number") {
      return (number / 100) * percentage;
    } else {
      return "Invalid params. Params must be integer!";
    }
  } catch (error) {
    return error;
  }
};

export const generateRandomColor = () => {
  try {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  } catch (error) {
    return error;
  }
};

export function normalizeSearchParams(searchParams = {}) {
  try {
    const resolvedParams = {};
    if (typeof searchParams === "object") {
      Object.entries(searchParams).forEach(([key, val]) => {
        if (val) resolvedParams[key] = val;
      });
    }
    return resolvedParams;
  } catch (error) {
    return error;
  }
}

export function sumAllBetweenTwoIntegers(min = 1, max = 1) {
  try {
    if (typeof min === "number" && typeof max === "number") {
      const result = ((max - min + 1) * (min + max)) / 2;
      return result;
    } else {
      return "Invalid params. Params must be integer!";
    }
  } catch (error) {
    return error;
  }
}

export function capitalizeFirstLetter(stringValue = "") {
  try {
    if (typeof stringValue === "string") {
      const result = string.charAt(0).toUpperCase() + string.slice(1);
      return result;
    } else {
      return "Invalid parameter. Parameter must be string!";
    }
  } catch (error) {
    return error;
  }
}

export function convertFileToUint8Array(file) {
  try {
    return new Promise((resolve, reject) => {
      file
        .arrayBuffer()
        .then((buff) => {
          let x = new Uint8Array(buff);
          resolve(x);
        })
        .catch((err) => {
          console.log("convertFileToUint8Array.file.arrayBuffer error: ", err);
          reject([]);
        });
    });
  } catch (error) {
    return error;
  }
}

export function getUniqueListByKey(arrayList = [], key = "") {
  try {
    if (Array.isArray(arrayList) && typeof key === "string") {
      const result = [
        ...new Map(arrayList.map((item) => [item[key], item])).values(),
      ];
      return result;
    } else {
      return "Invalid params. Required array and string!";
    }
  } catch (error) {
    return error;
  }
}

export function toFixedWithoutRounding(number = 1, fixed = -1) {
  try {
    if (typeof number === "number" && typeof fixed === "number") {
      const value = number && !isNaN(number) ? number : 0;
      const re = new RegExp("^-?\\d+(?:.\\d{0," + (fixed || -1) + "})?");
      const result = value.toString().match(re)[0];
      return result;
    } else {
      return "Invalid params. Params must be integer!";
    }
  } catch (error) {
    return error;
  }
}

export const getFileMimeTypeByExt = (extension = "") => {
  try {
    if (typeof extension === "string") {
      let result = "";
      if (extension && extension.startsWith(".")) {
        const findMimeType = commonMimeTypes.find(
          (item) => item.Extension.toLowerCase() === extension.toLowerCase()
        )["MIME Type"];
        result = findMimeType || "Unsupported extension";
      } else {
        result = "Invalid file extension. (example input: '.png')";
      }
      return result;
    } else {
      return "Invalid parameter. Required string!";
    }
  } catch (error) {
    return error;
  }
};

export function removeObjectPropertiesWithValue(obj, value) {
  try {
    if (typeof obj !== "object" && !value) {
      return "Invalid parameters! First parameter must be object and second parameter must be value";
    }
    const clone = (obj) => {
      if (obj === null || typeof obj !== "object") {
        return obj;
      }

      const newObj = obj.constructor();

      for (let key in obj) {
        newObj[key] = clone(obj[key]);
      }

      return newObj;
    };

    const removeProperties = (obj) => {
      for (let key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
          obj[key] = removeProperties(obj[key]);

          if (Object.keys(obj[key]).length === 0) {
            delete obj[key];
          }
        } else if (obj[key].includes(value)) {
          delete obj[key];
        }
      }

      if (Object.keys(obj).length === 0) {
        return {};
      }

      return obj;
    };

    const clonedObj = clone(obj);

    return removeProperties(clonedObj);
  } catch (error) {
    return error;
  }
}

export const toSnakeCase = (str) => {
  if (typeof str !== "string") {
    return "Invalid parameter. Required string value!";
  }
  return str.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`);
};
