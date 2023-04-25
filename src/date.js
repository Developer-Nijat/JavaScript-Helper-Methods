export const convertMillisToMinutesAndSeconds = (milliSeconds) => {
  try {
    if (milliSeconds) {
      var minutes = Math.floor(milliSeconds / 60000);
      var seconds = ((milliSeconds % 60000) / 1000).toFixed(0);
      return seconds == 60
        ? minutes + 1 + ":00"
        : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    } else {
      return "00:00";
    }
  } catch (error) {
    console.log("convertMillisToMinutesAndSeconds error", error);
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
    console.log("calculateDurationWithStartDate error", error);
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
    console.log("convertDateToMilliSeconds error", error);
    return error;
  }
};

export const convertTime12to24 = (time12h) => {
  try {
    const [time, modifier] = time12h.split(" ");
    let [hours, minutes] = time.split(":");
    if (hours === "12") {
      hours = "00";
    }
    if (modifier === "PM") {
      hours = parseInt(hours, 10) + 12;
    }
    return `${hours}:${minutes}`;
  } catch (error) {
    console.log("convertTime12to24 error", error);
    return error;
  }
};

export const convertSecondsToTime = (input, separator) => {
  try {
    var pad = function (input) {
      return input < 10 ? "0" + input : input;
    };
    return [
      pad(Math.floor(input / 3600)),
      pad(Math.floor((input % 3600) / 60)),
      pad(Math.floor(input % 60)),
    ].join(typeof separator !== "undefined" ? separator : ":");
  } catch (error) {
    console.log("convertSecondsToTime error: ", error);
    throw error;
  }
};
