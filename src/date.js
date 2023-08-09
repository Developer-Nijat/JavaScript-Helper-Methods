export const convertMillisToMinutesAndSeconds = (milliSeconds = 1) => {
  try {
    if (typeof milliSeconds === "number") {
      if (milliSeconds) {
        var minutes = Math.floor(milliSeconds / 60000);
        var seconds = ((milliSeconds % 60000) / 1000).toFixed(0);
        return seconds == 60
          ? minutes + 1 + ":00"
          : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
      } else {
        return "00:00";
      }
    } else {
      return "Invalid parameter. Required integer!";
    }
  } catch (error) {
    return error;
  }
};

export const calculateDurationWithStartDate = (date) => {
  try {
    if (!date) {
      return "Date required";
    }
    var mDateTime = new Date(date).getTime();
    var now = new Date().getTime();

    if (!isNaN(mDateTime)) {
      if (mDateTime < now) {
        var msd = now - mDateTime;
      } else {
        var msd = mDateTime - now;
      }
      return convertMillisToMinutesAndSeconds(msd);
    } else {
      return "00:00";
    }
  } catch (error) {
    return error;
  }
};

export const convertDateToMilliSeconds = (date) => {
  try {
    if (!date) {
      return "Date required";
    }
    var mDateTime = new Date(date).getTime();
    var now = new Date().getTime();

    if (!isNaN(mDateTime)) {
      if (mDateTime < now) {
        var msd = now - mDateTime;
      } else {
        var msd = mDateTime - now;
      }
      return msd;
    } else {
      return 0;
    }
  } catch (error) {
    return error;
  }
};

export const convertTime12to24 = (time12h = "") => {
  try {
    if (typeof time12h === "string") {
      const [time, modifier] = time12h.split(" ");
      let [hours, minutes] = time.split(":");
      if (hours === "12") {
        hours = "00";
      }
      if (modifier === "PM") {
        hours = parseInt(hours, 10) + 12;
      }
      return `${hours}:${minutes}`;
    } else {
      return "Invalid parameter. Required string!";
    }
  } catch (error) {
    return error;
  }
};

export const convertSecondsToTime = (seconds = 1, separator = ":") => {
  try {
    if (typeof seconds === "number" && typeof separator === "string") {
      var pad = function (seconds) {
        return seconds < 10 ? "0" + seconds : seconds;
      };
      return [
        pad(Math.floor(seconds / 3600)),
        pad(Math.floor((seconds % 3600) / 60)),
        pad(Math.floor(seconds % 60)),
      ].join(typeof separator !== "undefined" ? separator : ":");
    } else {
      return "Invalid params";
    }
  } catch (error) {
    return error;
  }
};

export function getWeekOfMonth(date) {
  try {
    if (!date || typeof date !== "object") {
      console.log("Invalid date: ", date);
      return "Invalid date";
    }
    const startWeekDayIndex = 1; // 1 MonthDay 0 Sundays
    const firstDate = new Date(date.getFullYear(), date.getMonth(), 1);
    const firstDay = firstDate.getDay();

    let weekNumber = Math.ceil((date.getDate() + firstDay) / 7);
    if (startWeekDayIndex === 1) {
      if (date.getDay() === 0 && date.getDate() > 1) {
        weekNumber -= 1;
      }

      if (firstDate.getDate() === 1 && firstDay === 0 && date.getDate() > 1) {
        weekNumber += 1;
      }
    }
    return `week_${weekNumber}`;
  } catch (error) {
    console.log("getWeekOfMonth error: ", error);
    return error;
  }
}
