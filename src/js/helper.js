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

export const hideAllModelContent = function () {
  addSessionView.hideSessionForm();
  addSpotView.hideSpotForm();
  loginView.hideLoginForm();
  createUserView.hideCreateForm();
};
