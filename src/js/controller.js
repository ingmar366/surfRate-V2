import * as model from "./model";
import * as helper from "./helper";
import spotView from "./views/spotView";
import modalView from "./views/modalView";
import mapView from "./views/mapView";
import sessionView from "./views/sessionView";
import addSessionView from "./views/addSessionView";
import markupView from "./views/markupView";
import addSessionView from "./views/addSessionView";
import addSpotView from "./views/addSpotView";
import loginView from "./views/loginView";
import createUserView from "./views/createUserView";

const closeModal = function (e) {
  e.preventDefault();
  modalView.toggleModal();
  helper.hideAllModelContent();
};

////////////////////////////////////////////////////////////
//                                                        //
//                        LOGIN                           //
//                                                        //
////////////////////////////////////////////////////////////

const loginModalButtonHandler = function (e) {
  e.preventDefault();
  const target = e.target.classList;
  if (target.contains(`user__login-submit`)) loginSubmit();
  if (target.contains(`user__login-new-user`)) openCreateUser();
};

const loginSubmit = async function () {
  const userInfo = loginView.getData();
  const check = await model.login(userInfo);
  if (check !== 406) {
    localStorage.setItem("user", userInfo.username);
    localStorage.setItem("password", userInfo.password);
    localStorage.setItem("api", check);
    helper.hideAllModelContent();
    modalView.toggleModal();
  }
};

const login = function (e) {
  e.preventDefault();
  modalView.toggleModal();
  helper.hideAllModelContent();
  loginView.showLoginForm();
};

////////////////////////////////////////////////////////////
//                                                        //
//                     CREATE USER                        //
//                                                        //
////////////////////////////////////////////////////////////
const openCreateUser = function () {
  helper.hideAllModelContent();
  createUserView.showCreateForm();
};

const createUserSubmit = async function (e) {
  e.preventDefault();
  const newUserInfo = createUserView.getData();
  if (
    (newUserInfo.username === "",
    newUserInfo.password === "",
    newUserInfo.api === "")
  )
    return;
  const key = await model.createUser(newUserInfo);
};

////////////////////////////////////////////////////////////
//                                                        //
//                     MAP EVENTS                         //
//                                                        //
////////////////////////////////////////////////////////////
// move to clicked location on left menu
const moveMapToSpot = function (e) {
  //checking if the selected item is a spot
  if (e.target.parentNode.className !== `surf-spot`) return;
  // get the id number out of selected item
  const selectedSpotNumber = Number(e.target.parentNode.dataset.id);
  // updating selected spot
  model.selectedSpot(selectedSpotNumber);
  const modelSpot = model.data[selectedSpotNumber];
  //set map to location
  mapView.setMapToLocation(modelSpot);
  //open corresponding popup
  mapView.openMarker(`spot${selectedSpotNumber}`);
  //show graphic selected spot
  spotView.activeSpot(e.target);
  // display the session window and show all the sessions
  displaySessions(modelSpot);
};

let timer; //timer to prefent click error from leaflet
// get info selected marker and select in spot menu
const markerClickHandler = function (e) {
  const markerSpot = e.target._popup.options.className.slice(-1);
  spotView.activeSpot(markerSpot);
  // update current active spot
  model.selectedSpot(markerSpot);
  //show the sessions connected with the spot
  displaySessions(model.data[markerSpot]);

  // small timeout for the popup. A bug in leaflet make every click double click and make it that the popup doesnt show. This popup filters excidental double clicks
  if (Date.now() >= timer + 1800 || !timer) {
    console.log(timer);
    timer = cooldown(markerSpot);
  }
};

const cooldown = function (markerSpot) {
  mapView.openMarker(`spot${markerSpot}`);
  return Date.now();
};

////////////////////////////////////////////////////////////
//                                                        //
//                SESSION MENU EVENTS                     //
//                                                        //
////////////////////////////////////////////////////////////

// display sessions in left menu
const displaySessions = function (selectedSpot) {
  sessionView.showContainer();
  sessionView.loadSpots(selectedSpot);
};

//show extended info on click session
const sessionClickHandler = function (e) {
  sessionView.toggleLongSessionDescription(e.target);
};

// new session button click
const openModalNewSession = function (e) {
  e.preventDefault();
  // get data of the current active spot
  const curSpotData = model.selectedSpotData();
  if (!curSpotData) {
    window.alert(`Select a spot before adding a new session!`);
    return;
  }
  // check if person succesfully logged in
  if (!localStorage.getItem("api")) {
    window.alert(`Login before making a new session`);
    return;
  }
  // show modal and the current data
  modalView.toggleModal();
  addSessionView.showSessionForm(curSpotData.name);
};

////////////////////////////////////////////////////////////
//                                                        //
//                      NEW SESSION                       //
//                                                        //
////////////////////////////////////////////////////////////

// event handler to clicks modal session buttons
const modalClicksSessions = function (e) {
  const targetEl = e.target;
  if (targetEl.classList.contains("add__session-rating-item"))
    addSessionView.settingStars(targetEl);
  if (targetEl.classList.contains(`add__session-submit`)) {
    e.preventDefault();
    newSessionSubmit(targetEl);
  }
};

// validating data out of new session
const newSessionSubmit = function () {
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

// get data from stormglass and formats it
const formatAndUpload = async function (data) {
  try {
    const conditionData = await stormglassAPICall();
    const resultObj = {
      ...conditionData,
      strength: +data.strength,
      clean: +data.clean,
      overal: +data.overal,
      description: data.description,
    };

    // updating data to model
    const response = await model.uploadData(resultObj);
    if (response === 201) {
      await model.getData();
      displaySessions(model.data[model.curSelectedSpot]);
    }
  } catch (err) {
    console.log(err.message);
  }
};

// make api call for current selected location
const stormglassAPICall = async function () {
  try {
    // getting lat and long from the current selected spot
    const { lat: curSpotLat, long: curSpotLong } =
      model.data[model.curSelectedSpot].spot;
    // call stormglass api for data
    const { hours } = await model.getSpotData(curSpotLat, curSpotLong);
    const conditionData = hours[0];
    return conditionData;
  } catch (err) {
    console.log(err.message);
  }
};

////////////////////////////////////////////////////////////
//                                                        //
//                      NEW SPOT                          //
//                                                        //
////////////////////////////////////////////////////////////

// get clicked location on map
const getMarkerPosition = function (mapE) {
  if (!localStorage.getItem("user")) {
    window.alert("Login before Creating a new Spot");
    return;
  }
  const { lat, lng } = mapE.latlng;
  // open modal window to add spot
  modalView.toggleModal();
  addSpotView.showSpotForm();
  // save clicked location in model
  model.selectedLocation([lat, lng]);
};

const submitClickHandlerSpots = async function (e) {
  try {
    e.preventDefault();
    //get data out of input fields
    const data = addSpotView.getInputData();
    // validate data
    if (!data) return;
    const result = await model.newSurfSpot(data);
    console.log(result);
    if (result === 201) {
      await model.getData(); //get data from the api to rerender spots
      spotView.displaySpots(model.data);
      mapView.displayMarkers(model.data, markerClickHandler);
      modalView.toggleModal();
      addSpotView.clearFields();
      addSpotView.hideSpotForm();
    }
  } catch (err) {
    console.log(err.message);
  }
};

////////////////////////////////////////////////////////////
//                                                        //
//                       INIT                             //
//                                                        //
////////////////////////////////////////////////////////////
// initializing basic functionality at the start up of application
const init = async function () {
  try {
    loginView.buttonClick(loginModalButtonHandler);
    createUserView.submitHandler(createUserSubmit);
    modalView.closeHandler(closeModal);
    await model.getData();
    await mapView.setupMap();
    spotView.displaySpots(model.data);
    spotView.addHandlerClick(moveMapToSpot);
    mapView.displayMarkers(model.data, markerClickHandler);
    mapView.addHandlerClickMap(getMarkerPosition);
    sessionView.clickHandlerSession(sessionClickHandler);
    markupView.newSessionClickHandler(openModalNewSession);
    markupView.loginClickHandler(login);
    addSessionView.clickHandler(modalClicksSessions);
    addSpotView.clickHandler(submitClickHandlerSpots);
  } catch (err) {
    console.log(err.message);
  }
};

init();

//////////////////////////////////////////////////////////////////////
