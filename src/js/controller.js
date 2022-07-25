import * as model from "./model";
import spotView from "./views/spotView";
import modalView from "./views/modalView";
import mapView from "./views/mapView";
import sessionView from "./views/sessionView";
import addSessionView from "./views/addSessionView";
import markupView from "./views/markupView";
import addSessionView from "./views/addSessionView";
import addSpotView from "./views/addSpotView";

////////////////////////////////////////////////////////////
// SHOW SESSION MENU AND SESSIONS
const displaySessions = function (selectedSpot) {
  sessionView.showContainer();
  sessionView.loadSpots(selectedSpot);
};

////////////////////////////////////////////////////////////
// MOVE TO CLICKED MARKER LOCATION
const moveMapToSpot = function (e) {
  //checking if the selected item is a spot
  if (e.target.parentNode.className !== `surf-spot`) return;
  // get the id number out of selected item
  const selectedSpotNumber = Number(e.target.parentNode.dataset.id) + 1;
  // updating selected spot
  model.selectedSpot(selectedSpotNumber);
  const modelSpot = model.data.surfspot[`spot${selectedSpotNumber}`];
  //set map to location
  mapView.setMapToLocation(modelSpot);

  //open corresponding popup
  mapView.openMarker(`spot${selectedSpotNumber - 1}`);

  //show graphic selected spot
  spotView.activeSpot(e.target);

  // display the session window and show all the sessions
  displaySessions(modelSpot);
};

////////////////////////////////////////////////////////////
// GET INFO SELECTED MARKER AND SELECT SPOT IN MENU
const markerClickHandler = function (e) {
  const markerSpot = e.target._popup.options.className.slice(-1);
  spotView.activeSpot(markerSpot);
  // update current active spot
  model.selectedSpot(markerSpot);
  //show the sessions connected with the spot
  displaySessions(model.data.surfspot[`spot${+markerSpot + 1}`]);
  mapView.openMarker(`spot${+markerSpot + 1}`);
};

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
//SESSION HANDELING

//SHOW EXTENDED INFO SESSION
const sessionClickHandler = function (e) {
  sessionView.toggleLongSessionDescription(e.target);
};

////////////////////////////////////////////////////////////
// NEW SESSION CLICK
const openModalHandler = function (e) {
  e.preventDefault();
  const curSpotData = model.selectedSpotData();
  if (!curSpotData) {
    window.alert(`Select a spot before adding a new session!`);
    return;
  }
  modalView.toggleModal();
  addSessionView.showSessionForm(curSpotData.name);
};

const closeModal = function (e) {
  e.preventDefault();
  modalView.toggleModal();
  addSessionView.hideSessionForm();
  addSpotView.hideSpotForm();
};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// CREATE NEW SESSION

// GET CURRENT DATE
const getCurrentDate = function () {
  const date = new Date();
  const curDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  return curDate;
};
////////////////////////////////////////////////////////////
// MAKE API CALL FOR CURRENT SELECTED SPOT
const stormglassAPICall = async function () {
  try {
    // getting lat and long from the current selected spot
    const { lat: curSpotLat, long: curSpotLong } =
      model.data.surfspot[`spot${model.curSelectedSpot}`].location;

    // call stormglass api for data
    const { hours } = await model.getSpotData(curSpotLat, curSpotLong);
    const conditionData = hours[0];
    return conditionData;
  } catch (err) {
    console.log(message.err);
  }
};
////////////////////////////////////////////////////////////
// CALCULATE THE LENGTH OF SESSIONS TO NAME THE NEXT
const getAmountOfSessions = function () {
  const amountSessions = `session${
    Object.keys(model.data.surfspot[`spot${model.curSelectedSpot}`].sessions)
      .length + 1
  }`;
  return amountSessions;
};
////////////////////////////////////////////////////////////
// GET DATA FROM SOURCES , FORMAT AND UPLOADS DATA TO MODEL
const formatAndUpload = async function (data) {
  const conditionData = await stormglassAPICall();
  const amountSessions = getAmountOfSessions();
  const curDate = getCurrentDate();

  const resultObj = {
    date: curDate,
    ...conditionData,
    strength: +data.strength,
    clean: +data.clean,
    overal: +data.overal,
    description: data.description,
    wind: conditionData.windSpeed.sg,
    windDirection: conditionData.windDirection.sg,
    waveheight: conditionData.waveHeight.sg,
    swellheight: conditionData.swellHeight.sg,
  };

  // updating data
  model.uploadData(resultObj, amountSessions);
  // refreshing sessions
  displaySessions(model.data.surfspot[`spot${model.curSelectedSpot}`]);
};

////////////////////////////////////////////////////////////
// PROCESS DATA WHEN SUBMIT HAS BEEN CLICKED
const gettingData = function (e) {
  // getting the data out of the modal
  const data = addSessionView.getInputData();
  // checking for valid data
  if (!data.strength || !data.clean || !data.overal) {
    window.alert("Please enter valid ratings!");
    return;
  }
  // closing and clearing the modal
  addSessionView.clearAndClose();
  modalView.toggleModal();

  formatAndUpload(data);
};

////////////////////////////////////////////////////////////
// event handler to clicks on modal buttons
const modalClicks = function (e) {
  const targetEl = e.target;
  if (targetEl.classList.contains("add__spot-rating-item"))
    addSessionView.settingStars(targetEl);
  if (targetEl.classList.contains(`add__session-submit`)) {
    e.preventDefault();
    gettingData(targetEl);
  }
};

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// CREATE NEW SPOT
const getMarkerPosition = function (mapE) {
  //   returning clicked position on the map
  const { lat, lng } = mapE.latlng;
  modalView.toggleModal();
  addSpotView.showSpotForm();
  // save clicked location in model
  model.selectedLocation([lat, lng]);
};

// get the length amount spots
const getAmountSurfspots = function () {
  return Object.keys(model.data.surfspot).length;
};

const submitClickHandler = function (e) {
  e.preventDefault();
  //get data out of input fields
  const data = addSpotView.getInputData();
  // validate data
  if (!data) return;
  const name = `spot${getAmountSurfspots()}`;
  model.newSurfSpot(name, data);
  spotView.displaySpots(model.data);
  mapView.displayMarkers(model.data, markerClickHandler);
  modalView.toggleModal();
  addSessionView.hideSessionForm();
};

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// initializing basic functionality at the start up of application
const init = async function () {
  try {
    await mapView.setupMap();
    spotView.displaySpots(model.data);
    spotView.addHandlerClick(moveMapToSpot);
    mapView.displayMarkers(model.data, markerClickHandler);
    mapView.addHandlerClickMap(getMarkerPosition);
    sessionView.clickHandlerSession(sessionClickHandler);
    markupView.newSessionClickHandler(openModalHandler);
    modalView.closeHandler(closeModal);
    addSessionView.clickHandler(modalClicks);
    addSpotView.clickHandler(submitClickHandler);
  } catch (err) {
    console.log(err.message);
  }
};

init();
