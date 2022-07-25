// TEMPORARY DATA, OUTPUT OUT OF STORMGLASS API CALL AND FAKE SPOTS

export let data = {
  surfspot: {
    spot1: {
      name: `Brown Haven`,
      location: {
        name: `Dunbar`,
        lat: 56.002087,
        long: -2.516737,
      },
      sessions: {
        session1: {
          date: "02/02/2022",
          strength: 2,
          clean: 4,
          overal: 3,
          waveheight: 1.2,
          swellheight: 0.8,
          wind: 12,
          windDirection: "NW",
          description: "filler text",
        },
        session2: {
          date: "02/02/2022",
          strength: 2,
          clean: 4,
          overal: 3,
          waveheight: 1.2,
          swellheight: 0.8,
          wind: 12,
          windDirection: "NW",
          description: "filler text",
        },
      },
      forcast: [
        {
          seaLevel: {
            meto: -1.73,
            sg: -1.73,
          },
          secondarySwellDirection: {
            noaa: 21.34,
            sg: 21.34,
          },
          secondarySwellHeight: {
            noaa: 0.09,
            sg: 0.09,
          },
          secondarySwellPeriod: {
            noaa: 12.02,
            sg: 12.02,
          },
          swellDirection: {
            dwd: 86.74,
            icon: 81.16,
            meteo: 72.28,
            meto: 34.5,
            noaa: 101.54,
            sg: 34.5,
          },
          swellHeight: {
            dwd: 0.31,
            icon: 0.27,
            meteo: 0.03,
            meto: 0.17,
            noaa: 0.17,
            sg: 0.17,
          },
          swellPeriod: {
            dwd: 6.16,
            icon: 6.49,
            meteo: 3.05,
            meto: 10.71,
            noaa: 3.82,
            sg: 10.71,
          },
          time: "2022-03-24T11:00:00+00:00",
          waterTemperature: {
            meto: 7.26,
            noaa: 9.65,
            sg: 7.26,
          },
          waveDirection: {
            icon: 81.34,
            meteo: 53.54,
            meto: 34,
            noaa: 46.75,
            sg: 34,
          },
          waveHeight: {
            dwd: 0.31,
            icon: 0.27,
            meteo: 0.04,
            meto: 0.2,
            noaa: 0.23,
            sg: 0.2,
          },
          wavePeriod: {
            icon: 6.45,
            meteo: 3.18,
            meto: 3.47,
            noaa: 7.15,
            sg: 3.47,
          },
          windDirection: {
            icon: 227.14,
            noaa: 255.4,
            sg: 227.14,
          },
          windDirection1000hpa: {
            noaa: 269.98,
            sg: 269.98,
          },
          windDirection100m: {
            noaa: 269.98,
            sg: 269.98,
          },
          windDirection200hpa: {
            noaa: 270.12,
            sg: 270.12,
          },
          windDirection20m: {
            noaa: 269.99,
            sg: 269.99,
          },
          windDirection30m: {
            noaa: 269.99,
            sg: 269.99,
          },
          windDirection40m: {
            noaa: 269.98,
            sg: 269.98,
          },
          windDirection500hpa: {
            noaa: 270.04,
            sg: 270.04,
          },
          windDirection50m: {
            noaa: 269.98,
            sg: 269.98,
          },
          windDirection800hpa: {
            noaa: 270,
            sg: 270,
          },
          windDirection80m: {
            noaa: 269.98,
            sg: 269.98,
          },
          windSpeed: {
            icon: 3.01,
            noaa: 3.43,
            sg: 3.01,
          },
          windSpeed1000hpa: {
            noaa: 4.85,
            sg: 4.85,
          },
          windSpeed100m: {
            noaa: 4.66,
            sg: 4.66,
          },
          windSpeed200hpa: {
            noaa: 8.26,
            sg: 8.26,
          },
          windSpeed20m: {
            noaa: 3.61,
            sg: 3.61,
          },
          windSpeed30m: {
            noaa: 3.94,
            sg: 3.94,
          },
          windSpeed40m: {
            noaa: 4.13,
            sg: 4.13,
          },
          windSpeed500hpa: {
            noaa: 4.17,
            sg: 4.17,
          },
          windSpeed50m: {
            noaa: 4.3,
            sg: 4.3,
          },
          windSpeed800hpa: {
            noaa: 5.44,
            sg: 5.44,
          },
          windSpeed80m: {
            noaa: 4.57,
            sg: 4.57,
          },
          windWaveDirection: {
            dwd: 180,
            icon: 211.19,
            meteo: 317.72,
            meto: 287.6,
            noaa: 266.25,
            sg: 287.6,
          },
          windWaveHeight: {
            dwd: 0,
            icon: 0.02,
            meteo: 0,
            meto: 0.07,
            noaa: 0.14,
            sg: 0.07,
          },
          windWavePeriod: {
            dwd: 1,
            icon: 1.32,
            meteo: 0,
            meto: 1.52,
            noaa: 1.81,
            sg: 1.52,
          },
        },
      ],
    },
    spot2: {
      name: `test2`,
      location: {
        name: `radazul`,
        lat: 28.403069,
        long: -16.316904,
      },
      sessions: {},
    },
    spot3: {
      name: `test1`,
      location: {
        name: `radazul`,
        lat: 28.0,
        long: -16.316904,
      },
      sessions: {},
    },
    spot4: {
      name: `test1`,
      location: {
        name: `radazul`,
        lat: 28.3,
        long: -16.316904,
      },
      sessions: {},
    },
  },
};

////////////////////////////////////////////////////////////////////

// VARIABLES
// keep track of location clicked on map
export let clickLocation;
// Keep track of the number of selected spot
export let curSelectedSpot;
//API CALL

//list parameters for api call
const parameters = [
  `waterTemperature`,
  `wavePeriod`,
  `waveDirection`,
  `waveHeight`,
  `windWaveDirection`,
  `windWaveHeight`,
  `windWavePeriod`,
  `swellPeriod`,
  `secondarySwellPeriod`,
  `swellDirection`,
  `secondarySwellDirection`,
  `swellHeight`,
  `secondarySwellHeight`,
  `windSpeed`,
  `windSpeed20m`,
  `windSpeed30m`,
  `windSpeed40m`,
  `windSpeed50m`,
  `windSpeed80m`,
  `windSpeed100m`,
  `windSpeed1000hpa`,
  `windSpeed800hpa`,
  `windSpeed500hpa`,
  `windSpeed200hpa`,
  `windDirection`,
  `windDirection20m`,
  `windDirection30m`,
  `windDirection40m`,
  `windDirection50m`,
  `windDirection80m`,
  `windDirection100m`,
  `windDirection1000hpa`,
  `windDirection800hpa`,
  `windDirection500hpa`,
  `windDirection200hpa`,
  `seaLevel`,
];

export const getSpotData = async function (lat, lng) {
  try {
    //creating hour time slot for api call
    const time = Math.floor(Date.now() / 1000);
    const currentTimeStr = `` + time;
    const hourAgowStr = `` + (time - 60 * 60);
    const api = `9c945fb8-aacd-11ec-a97f-0242ac130002-9c946026-aacd-11ec-a97f-0242ac130002`;

    const data = await fetch(
      `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${parameters}&start=${hourAgowStr}&end=${currentTimeStr}`,
      {
        headers: {
          Authorization: api,
        },
      }
    );
    const dataJson = data.json();
    return dataJson;
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
  return data.surfspot[`spot${curSelectedSpot}`];
};

// update the data with new sessions
export const uploadData = function (sessionData, session) {
  data.surfspot[`spot${curSelectedSpot}`].sessions[session] = sessionData;
};

export const newSurfSpot = function (spotName, inputData) {
  data.surfspot[spotName] = {
    name: inputData[0],
    location: {
      name: inputData[1],
      lat: clickLocation[0],
      long: clickLocation[1],
    },
    sessions: {},
  };
};
