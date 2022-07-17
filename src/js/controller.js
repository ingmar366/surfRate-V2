import * as model from "./model";
import spotView from "./views/spotView";
import mapView from "./views/mapView";
import sessionView from "./views/sessionView";

////////////////////////////////////////////////////////////////// display spots /////////////////

// call functions to show session menu and the sessions
const displaySessions = function (selectedSpot) {
  sessionView.showContainer();
  sessionView.loadSpots(selectedSpot);
};

// make it possible to click on a spot and moving the map to the spot location.
const moveMapToSpot = function (e) {
  //checking if the selected item is a spot
  if (e.path[1].className !== `surf-spot`) return;
  // get the id number out of selected item
  const selectedSpotNumber = Number(e.path[1].dataset.id) + 1;

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

// get classname out of the marker to show graphic selected spot
const markerClickHandler = function (e) {
  const markerSpot = e.target._popup.options.className.slice(-1);
  spotView.activeSpot(markerSpot);
  //show the sessions connected with the spot
  displaySessions(model.data.surfspot[`spot${+markerSpot + 1}`]);
};

const sessionClick = function (e) {
  sessionView.toggleLongSessionDescription(e.target);
};

// enable basic functionality at start of app
const init = async function () {
  try {
    spotView.displaySpots(model.data);
    spotView.addHandlerClick(moveMapToSpot);
    await mapView.setupMap();
    mapView.displayMarkers(model.data, markerClickHandler);
    sessionView.clickHandlerSession(sessionClick);
  } catch (err) {
    console.log(err.message);
  }
};

init();

// functions under construction:

// get the location of a click on the map so it can be used to register a new spot.
const getClickLocation = function (e) {
  const latlng = mapView.getMarkerPosition(e);
  model.data.curClickedLocation = latlng;

  // creates popup that where you can implement spot information

  // submit/cancel

  // write data connected to the spot

  // upload data to api

  // rerender spots
};

//////////////////////////////////////////////////////////////////////////////////////// CODE FROM EARLYER START VERSION
////////////////////////////////////////////////////////////////////////

//   #spotButtons(e) {
//     const clickedClasslist = e.target.classList;
//     if (clickedClasslist.contains(`btn__new-spot-submit`)) {
//       this.#newSpotName = inputName.value;
//       this.#newSpotLocation = inputLocation.value;
//       this.#newSpotDirection = inputDirection.value;
//       inputName.value = inputLocation.value = inputDirection.value = "";
//       this.modalVisibilty();
//       this.#placeMarker(this.#newSpotLat, this.#newSpotLng);
//     }
//   }

//   #getMarkerPosition(mapE) {
//     const { lat, lng } = mapE.latlng;

//     this.modalVisibilty();

//     this.#newSpotLat = lat;
//     this.#newSpotLng = lng;
//   }

//   #placeMarker(lat, lng) {
//     this.#surfspotCounter = Object.entries(localData.surfspot).length;
//     localData.surfspot[`spot${this.#surfspotCounter}`] = {
//       name: this.#newSpotName,
//       location: {
//         name: this.#newSpotLocation,
//         direction: this.#newSpotDirection,
//         lat: lat,
//         long: lng,
//       },
//     };
//     L.marker([lat, lng])
//       .addTo(this.#map)
//       .bindPopup(
//         L.popup({
//           maxWidth: 250,
//           minWidth: 150,
//           autoClose: false,
//           closeOnClick: false,
//         }).setContent(
//           `<div class="spot-popup" data-spotIndex=${
//             this.#surfspotCounter + 1
//           }><span>${this.#newSpotName}</span>
//           <p>${this.#newSpotLocation}</div>`
//         )
//       );
//     console.log(localData.surfspot[`spot${this.#surfspotCounter}`]);
//     this.displaySpots();
//   }
//   modalVisibilty() {
//     newSpot.classList.toggle(`hidden`);
//     modal.classList.toggle(`hidden`);
//     overlay.classList.toggle(`hidden`);
//   }
// }

// // TO KEEP FOR SOMEWHERE ELSE:

// const getData = function (location) {
//   const spot = localData.surfspot[location];
//   this.dataReturn(spot);
// };
