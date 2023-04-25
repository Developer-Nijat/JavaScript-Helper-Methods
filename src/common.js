import moment from "moment";

export const getFileSize = (_size) => {
  try {
    var fSExt = new Array("Bytes", "KB", "MB", "GB"),
      i = 0;
    while (_size > 900) {
      _size /= 1024;
      i++;
    }
    var exactSize = Math.round(_size * 100) / 100 + " " + fSExt[i];
    return exactSize;
  } catch (error) {
    console.log("getFileSize error: ", error);
    throw error;
  }
};

export const htmlDecode = (input) => {
  try {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
  } catch (error) {
    console.log("htmlDecode error: ", error);
    throw error;
  }
};

export const htmlEncode = (input) => {
  try {
    return input.replace(/[\u00A0-\u9999<>\&]/g, function (i) {
      return "&#" + i.charCodeAt(0) + ";";
    });
  } catch (error) {
    console.log("htmlEncode error: ", error);
    throw error;
  }
};

export const getRandomNumber = (min, max) => {
  try {
    return Math.floor(Math.random() * (max - min + 1) + min);
  } catch (error) {
    console.log("getRandomNumber error: ", error);
    throw error;
  }
};

export const uniqueNumberFromString = (stringValue, utf16 = false) => {
  try {
    let results = "";
    const fixedNumber = utf16 ? 10000 : 100;
    for (let i = 0; i < stringValue.length; i++) {
      results += (fixedNumber + stringValue[i].charCodeAt(0)).toString();
    }
    return parseInt(results);
  } catch (error) {
    console.log("uniqueNumberFromString error: ", error);
    throw error;
  }
};

export function normalizeGraphFilterForExpress(filter) {
  try {
    let where = "";
    Object.entries(filter).forEach(([key, val], index) => {
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
    return where;
  } catch (error) {
    console.log("normalizeGraphFilterForExpress error: ", error);
    throw error;
  }
}

export const normalizeAzPhoneNumber = (number) => {
  try {
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
  } catch (error) {
    console.log("normalizeAzPhoneNumber error: ", error);
    throw error;
  }
};

export const normalizeAz9DigitNumber = (number) => {
  try {
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
  } catch (error) {
    console.log("normalizeAz9DigitNumber error: ", error);
    throw error;
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
    console.log("extractNumberFromTime error", error);
    return error;
  }
};

export const calculatePercentageOfNumber = (number, percentage) => {
  try {
    return (number / 100) * percentage;
  } catch (error) {
    console.log("calculatePercentageOfNumber error", error);
    return error;
  }
};

export const generateRandomColor = () => {
  try {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  } catch (error) {
    console.log("generateRandomColor error", error);
    return error;
  }
};

export function normalizeSearchParams(params) {
  try {
    const resolvedParams = {};
    Object.entries(params).forEach(([key, val]) => {
      if (val) resolvedParams[key] = val;
    });
    return resolvedParams;
  } catch (error) {
    console.log("normalizeSearchParams error", error);
    return error;
  }
}
