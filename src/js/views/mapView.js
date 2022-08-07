class MapView {
  #map;
  #mapZoomlevel = 12;

  #clearMap() {
    if (this.#map != undefined) {
      this.#map.remove();
    }
  }

  //ask browser for the current location of the user
  #getLocation() {
    //made a promise so it will wait for a response of the user before rendering the map
    return new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(res, rej);
    });
  }

  async setupMap() {
    //getting the location data and calling map function
    try {
      this.#clearMap();
      const response = await this.#getLocation();
      const { latitude, longitude } = response.coords;
      this.#loadMap([latitude, longitude], this.#mapZoomlevel);
    } catch (err) {
      console.log(err.message);
      this.#loadMap();
    }
  }

  #loadMap(latlng = [53.0, 9.0], z = 5) {
    //loading the map with default location or location given by browser
    return new Promise((res, rej) => {
      this.#map = L.map("map").setView(latlng, z);
      L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(this.#map);
    });
  }

  // displaying all the surfspots that are currently in the data obj
  displayMarkers(surfspots, clickHandler) {
    const arrSpots = Object.entries(surfspots);
    arrSpots.forEach((i, ind) => {
      const curLat = i[1].spot.lat;
      const curLng = i[1].spot.long;
      L.marker([curLat, curLng])
        .on("click", clickHandler)
        .addTo(this.#map)
        .bindPopup(
          L.popup({
            maxWidth: 250,
            minWidth: 150,
            autoClose: true,
            className: `spot-popup spot${ind + 1}`,
            closeOnClick: false,
          })
        )
        .setPopupContent(`${i[1].spot.name}`);
    });
  }

  // set the map to a given location, for example when a surfspot is clicked.
  setMapToLocation(spot) {
    if (!this.#map) return;
    // prefents error when a surfspot is clicked but there is not map loaded yet.

    const coords = [spot.spot.lat, spot.spot.long];
    this.#map.setView(coords, this.#mapZoomlevel);
  }

  // function for later determen where a new spot needs to be rendered
  addHandlerClickMap(handler) {
    // add eventhanlder click on the map
    this.#map.on(`click`, handler);
  }

  //open the marker that has the same classname as the currentSpot input
  openMarker(currentSpot) {
    Object.entries(this.#map._layers).forEach((layer) => {
      const marker = layer[1].dragging;
      if (!marker) return; //checking if marker has a value
      if (marker._marker._popup.options.className.slice(-5) === currentSpot) {
        marker._marker.openPopup();
        console.log(marker);
      }
      // selecting the one that has the same classname and opens the popup from this marker
    });
  }
}

export default new MapView();
