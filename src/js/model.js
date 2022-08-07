import * as config from "./config";
////////////////////////////////////////////////////////////////////

// VARIABLES
// keep track of location clicked on map
export let clickLocation;
// Keep track of the number of selected spot
export let curSelectedSpot;
// spot and session data
export let data;

export const getSpotData = async function (lat, lng) {
  try {
    //creating hour time slot for api call
    const time = Math.floor(Date.now() / 1000);
    const currentTimeStr = `` + time;
    const hourAgowStr = `` + (time - 60 * 60);
    const api = localStorage.getItem("api");

    const data = await fetch(
      `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${config.parameters}&start=${hourAgowStr}&end=${currentTimeStr}`,
      {
        headers: {
          Authorization: api,
        },
      }
    );

    return data.json();
  } catch (err) {
    console.log(err.message);
  }
};

// update selected spot
export const selectedSpot = function (selectedSpot) {
  curSelectedSpot = selectedSpot;
};

export const selectedLocation = function (latlng) {
  clickLocation = latlng;
};

// return the information of the current selected spot
export const selectedSpotData = function () {
  if (!curSelectedSpot) return;
  return data[curSelectedSpot];
};

// update the data with new sessions
export const uploadData = async function (sessionData) {
  try {
    const result = await createSession(sessionData);
    return result;
  } catch (err) {
    return err.message;
  }
};

export const newSurfSpot = async function (inputData) {
  try {
    const result = await createSpot(
      inputData[0],
      inputData[1],
      clickLocation[0],
      clickLocation[1]
    );
    return result;
  } catch (err) {
    return err;
  }
};

///////////////////////// BACKEND CALLS////////////////////////////
export const createUser = async function (newUserInfo) {
  try {
    const userInfo = JSON.stringify(newUserInfo);
    const upload = await fetch(`http://127.0.0.1:8000/user?data=${userInfo}`, {
      method: "POST",
      header: { "Content-Type": "application/json" },
    });
    return upload.json();
  } catch (err) {
    return err.message;
  }
};
//   "9c945fb8-aacd-11ec-a97f-0242ac130002-9c946026-aacd-11ec-a97f-0242ac130002"

////////////////////////////////////////////
export const login = async function (userInfo) {
  try {
    const upload = await fetch(
      `http://127.0.0.1:8000/user/login?username=${userInfo.username}&password=${userInfo.password}`,
      {
        method: "GET",
        header: { "Content-Type": "application/json" },
      }
    );
    return upload.json();
  } catch (err) {
    return err.message;
  }
};

// login("johannes", "something");

////////////////////////////////////////////

export const getData = async function () {
  try {
    const result = await fetch(`http://127.0.0.1:8000/spot/all`, {
      method: "GET",
      header: { "Content-Type": "application/json" },
    }).then((response) => response.json());
    data = result;
  } catch (err) {
    return err.message;
  }
};

export const createSpot = async function (name, spotName, lat, long) {
  try {
    const request = JSON.stringify({
      name: name,
      location: [lat, long],
      secondName: spotName,
    });

    const upload = await fetch(
      `http://127.0.0.1:8000/spot/create?data=${request}`,
      {
        method: "POST",
        header: { "Content-Type": "application/json" },
      }
    );
    return upload.json();
  } catch (err) {
    return err.message;
  }
};

const createSession = async function (forcastData) {
  try {
    const forcastStr = JSON.stringify(forcastData);
    const response = await fetch(
      `http://127.0.0.1:8000/session/create/${curSelectedSpot}?forcast=${forcastStr}`,
      {
        method: "POST",
        header: { "Content-Type": "application/json" },
      }
    );
    return response.json();
  } catch (err) {
    return err.message;
  }
};
