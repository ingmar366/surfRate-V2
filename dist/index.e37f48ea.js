// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2kSJi":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _model = require("./model");
var _spotView = require("./views/spotView");
var _spotViewDefault = parcelHelpers.interopDefault(_spotView);
var _modalView = require("./views/modalView");
var _modalViewDefault = parcelHelpers.interopDefault(_modalView);
var _mapView = require("./views/mapView");
var _mapViewDefault = parcelHelpers.interopDefault(_mapView);
var _sessionView = require("./views/sessionView");
var _sessionViewDefault = parcelHelpers.interopDefault(_sessionView);
var _addSessionView = require("./views/addSessionView");
var _addSessionViewDefault = parcelHelpers.interopDefault(_addSessionView);
var _markupView = require("./views/markupView");
var _markupViewDefault = parcelHelpers.interopDefault(_markupView);
var _addSpotView = require("./views/addSpotView");
var _addSpotViewDefault = parcelHelpers.interopDefault(_addSpotView);
////////////////////////////////////////////////////////////
// SHOW SESSION MENU AND SESSIONS
const displaySessions = function(selectedSpot) {
    (0, _sessionViewDefault.default).showContainer();
    (0, _sessionViewDefault.default).loadSpots(selectedSpot);
};
////////////////////////////////////////////////////////////
// MOVE TO CLICKED MARKER LOCATION
const moveMapToSpot = function(e) {
    //checking if the selected item is a spot
    if (e.target.parentNode.className !== `surf-spot`) return;
    // get the id number out of selected item
    const selectedSpotNumber = Number(e.target.parentNode.dataset.id) + 1;
    // updating selected spot
    _model.selectedSpot(selectedSpotNumber);
    const modelSpot = _model.data.surfspot[`spot${selectedSpotNumber}`];
    //set map to location
    (0, _mapViewDefault.default).setMapToLocation(modelSpot);
    //open corresponding popup
    (0, _mapViewDefault.default).openMarker(`spot${selectedSpotNumber - 1}`);
    //show graphic selected spot
    (0, _spotViewDefault.default).activeSpot(e.target);
    // display the session window and show all the sessions
    displaySessions(modelSpot);
};
////////////////////////////////////////////////////////////
// GET INFO SELECTED MARKER AND SELECT SPOT IN MENU
const markerClickHandler = function(e) {
    const markerSpot = e.target._popup.options.className.slice(-1);
    (0, _spotViewDefault.default).activeSpot(markerSpot);
    // update current active spot
    _model.selectedSpot(markerSpot);
    //show the sessions connected with the spot
    displaySessions(_model.data.surfspot[`spot${+markerSpot + 1}`]);
    (0, _mapViewDefault.default).openMarker(`spot${+markerSpot + 1}`);
};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
//SESSION HANDELING
//SHOW EXTENDED INFO SESSION
const sessionClickHandler = function(e) {
    (0, _sessionViewDefault.default).toggleLongSessionDescription(e.target);
};
////////////////////////////////////////////////////////////
// NEW SESSION CLICK
const openModalHandler = function(e) {
    e.preventDefault();
    const curSpotData = _model.selectedSpotData();
    if (!curSpotData) {
        window.alert(`Select a spot before adding a new session!`);
        return;
    }
    (0, _modalViewDefault.default).toggleModal();
    (0, _addSessionViewDefault.default).showSessionForm(curSpotData.name);
};
const closeModal = function(e) {
    e.preventDefault();
    (0, _modalViewDefault.default).toggleModal();
    (0, _addSessionViewDefault.default).hideSessionForm();
    (0, _addSpotViewDefault.default).hideSpotForm();
};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// CREATE NEW SESSION
// GET CURRENT DATE
const getCurrentDate = function() {
    const date = new Date();
    const curDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    return curDate;
};
////////////////////////////////////////////////////////////
// MAKE API CALL FOR CURRENT SELECTED SPOT
const stormglassAPICall = async function() {
    try {
        // getting lat and long from the current selected spot
        const { lat: curSpotLat , long: curSpotLong  } = _model.data.surfspot[`spot${_model.curSelectedSpot}`].location;
        // call stormglass api for data
        const { hours  } = await _model.getSpotData(curSpotLat, curSpotLong);
        const conditionData = hours[0];
        return conditionData;
    } catch (err) {
        console.log(message.err);
    }
};
////////////////////////////////////////////////////////////
// CALCULATE THE LENGTH OF SESSIONS TO NAME THE NEXT
const getAmountOfSessions = function() {
    const amountSessions = `session${Object.keys(_model.data.surfspot[`spot${_model.curSelectedSpot}`].sessions).length + 1}`;
    return amountSessions;
};
////////////////////////////////////////////////////////////
// GET DATA FROM SOURCES , FORMAT AND UPLOADS DATA TO MODEL
const formatAndUpload = async function(data) {
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
        swellheight: conditionData.swellHeight.sg
    };
    // updating data
    _model.uploadData(resultObj, amountSessions);
    // refreshing sessions
    displaySessions(_model.data.surfspot[`spot${_model.curSelectedSpot}`]);
};
////////////////////////////////////////////////////////////
// PROCESS DATA WHEN SUBMIT HAS BEEN CLICKED
const gettingData = function(e) {
    // getting the data out of the modal
    const data = (0, _addSessionViewDefault.default).getInputData();
    // checking for valid data
    if (!data.strength || !data.clean || !data.overal) {
        window.alert("Please enter valid ratings!");
        return;
    }
    // closing and clearing the modal
    (0, _addSessionViewDefault.default).clearAndClose();
    (0, _modalViewDefault.default).toggleModal();
    formatAndUpload(data);
};
////////////////////////////////////////////////////////////
// event handler to clicks on modal buttons
const modalClicks = function(e) {
    const targetEl = e.target;
    if (targetEl.classList.contains("add__session-rating-item")) (0, _addSessionViewDefault.default).settingStars(targetEl);
    if (targetEl.classList.contains(`add__session-submit`)) {
        e.preventDefault();
        gettingData(targetEl);
    }
};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// CREATE NEW SPOT
const getMarkerPosition = function(mapE) {
    //   returning clicked position on the map
    const { lat , lng  } = mapE.latlng;
    (0, _modalViewDefault.default).toggleModal();
    (0, _addSpotViewDefault.default).showSpotForm();
    // save clicked location in model
    _model.selectedLocation([
        lat,
        lng
    ]);
};
// get the length amount spots
const getAmountSurfspots = function() {
    return Object.keys(_model.data.surfspot).length;
};
const submitClickHandler = function(e) {
    e.preventDefault();
    //get data out of input fields
    const data = (0, _addSpotViewDefault.default).getInputData();
    // validate data
    if (!data) return;
    const name = `spot${getAmountSurfspots() + 1}`;
    _model.newSurfSpot(name, data);
    (0, _spotViewDefault.default).displaySpots(_model.data);
    (0, _mapViewDefault.default).displayMarkers(_model.data, markerClickHandler);
    (0, _modalViewDefault.default).toggleModal();
    (0, _addSpotViewDefault.default).clearFields();
    (0, _addSpotViewDefault.default).hideSpotForm();
};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// initializing basic functionality at the start up of application
const init = async function() {
    try {
        await (0, _mapViewDefault.default).setupMap();
        (0, _spotViewDefault.default).displaySpots(_model.data);
        (0, _spotViewDefault.default).addHandlerClick(moveMapToSpot);
        (0, _mapViewDefault.default).displayMarkers(_model.data, markerClickHandler);
        (0, _mapViewDefault.default).addHandlerClickMap(getMarkerPosition);
        (0, _sessionViewDefault.default).clickHandlerSession(sessionClickHandler);
        (0, _markupViewDefault.default).newSessionClickHandler(openModalHandler);
        (0, _modalViewDefault.default).closeHandler(closeModal);
        (0, _addSessionViewDefault.default).clickHandler(modalClicks);
        (0, _addSpotViewDefault.default).clickHandler(submitClickHandler);
    } catch (err) {
        console.log(err.message);
    }
};
init();

},{"./model":"Y4A21","./views/spotView":"balrh","./views/mapView":"b2AA2","./views/sessionView":"01INf","./views/addSessionView":"6WgH4","./views/markupView":"kBFDp","./views/modalView":"8QpnA","./views/addSpotView":"kqLVa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "data", ()=>data);
parcelHelpers.export(exports, "clickLocation", ()=>clickLocation);
parcelHelpers.export(exports, "curSelectedSpot", ()=>curSelectedSpot);
parcelHelpers.export(exports, "getSpotData", ()=>getSpotData);
parcelHelpers.export(exports, "selectedSpot", ()=>selectedSpot);
parcelHelpers.export(exports, "selectedLocation", ()=>selectedLocation);
parcelHelpers.export(exports, "selectedSpotData", ()=>selectedSpotData);
parcelHelpers.export(exports, "uploadData", ()=>uploadData);
parcelHelpers.export(exports, "newSurfSpot", ()=>newSurfSpot);
let data = {
    surfspot: {
        spot1: {
            name: `Brown Haven`,
            location: {
                name: `Dunbar`,
                lat: 56.002087,
                long: -2.516737
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
                    description: "filler text"
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
                    description: "filler text"
                }
            }
        },
        spot2: {
            name: `petten`,
            location: {
                name: `petten`,
                lat: 52.770033,
                long: 4.654109
            },
            sessions: {}
        },
        spot3: {
            name: `bergen`,
            location: {
                name: `bergen aan zee`,
                lat: 52.661555,
                long: 4.621055
            },
            sessions: {}
        },
        spot4: {
            name: `wijk`,
            location: {
                name: `Wijk aan Zee`,
                lat: 52.472203,
                long: 4.552814
            },
            sessions: {}
        }
    },
    forcast: [
        {
            seaLevel: {
                meto: -1.73,
                sg: -1.73
            },
            secondarySwellDirection: {
                noaa: 21.34,
                sg: 21.34
            },
            secondarySwellHeight: {
                noaa: 0.09,
                sg: 0.09
            },
            secondarySwellPeriod: {
                noaa: 12.02,
                sg: 12.02
            },
            swellDirection: {
                dwd: 86.74,
                icon: 81.16,
                meteo: 72.28,
                meto: 34.5,
                noaa: 101.54,
                sg: 34.5
            },
            swellHeight: {
                dwd: 0.31,
                icon: 0.27,
                meteo: 0.03,
                meto: 0.17,
                noaa: 0.17,
                sg: 0.17
            },
            swellPeriod: {
                dwd: 6.16,
                icon: 6.49,
                meteo: 3.05,
                meto: 10.71,
                noaa: 3.82,
                sg: 10.71
            },
            time: "2022-03-24T11:00:00+00:00",
            waterTemperature: {
                meto: 7.26,
                noaa: 9.65,
                sg: 7.26
            },
            waveDirection: {
                icon: 81.34,
                meteo: 53.54,
                meto: 34,
                noaa: 46.75,
                sg: 34
            },
            waveHeight: {
                dwd: 0.31,
                icon: 0.27,
                meteo: 0.04,
                meto: 0.2,
                noaa: 0.23,
                sg: 0.2
            },
            wavePeriod: {
                icon: 6.45,
                meteo: 3.18,
                meto: 3.47,
                noaa: 7.15,
                sg: 3.47
            },
            windDirection: {
                icon: 227.14,
                noaa: 255.4,
                sg: 227.14
            },
            windDirection1000hpa: {
                noaa: 269.98,
                sg: 269.98
            },
            windDirection100m: {
                noaa: 269.98,
                sg: 269.98
            },
            windDirection200hpa: {
                noaa: 270.12,
                sg: 270.12
            },
            windDirection20m: {
                noaa: 269.99,
                sg: 269.99
            },
            windDirection30m: {
                noaa: 269.99,
                sg: 269.99
            },
            windDirection40m: {
                noaa: 269.98,
                sg: 269.98
            },
            windDirection500hpa: {
                noaa: 270.04,
                sg: 270.04
            },
            windDirection50m: {
                noaa: 269.98,
                sg: 269.98
            },
            windDirection800hpa: {
                noaa: 270,
                sg: 270
            },
            windDirection80m: {
                noaa: 269.98,
                sg: 269.98
            },
            windSpeed: {
                icon: 3.01,
                noaa: 3.43,
                sg: 3.01
            },
            windSpeed1000hpa: {
                noaa: 4.85,
                sg: 4.85
            },
            windSpeed100m: {
                noaa: 4.66,
                sg: 4.66
            },
            windSpeed200hpa: {
                noaa: 8.26,
                sg: 8.26
            },
            windSpeed20m: {
                noaa: 3.61,
                sg: 3.61
            },
            windSpeed30m: {
                noaa: 3.94,
                sg: 3.94
            },
            windSpeed40m: {
                noaa: 4.13,
                sg: 4.13
            },
            windSpeed500hpa: {
                noaa: 4.17,
                sg: 4.17
            },
            windSpeed50m: {
                noaa: 4.3,
                sg: 4.3
            },
            windSpeed800hpa: {
                noaa: 5.44,
                sg: 5.44
            },
            windSpeed80m: {
                noaa: 4.57,
                sg: 4.57
            },
            windWaveDirection: {
                dwd: 180,
                icon: 211.19,
                meteo: 317.72,
                meto: 287.6,
                noaa: 266.25,
                sg: 287.6
            },
            windWaveHeight: {
                dwd: 0,
                icon: 0.02,
                meteo: 0,
                meto: 0.07,
                noaa: 0.14,
                sg: 0.07
            },
            windWavePeriod: {
                dwd: 1,
                icon: 1.32,
                meteo: 0,
                meto: 1.52,
                noaa: 1.81,
                sg: 1.52
            }
        }, 
    ]
};
let clickLocation;
let curSelectedSpot;
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
const getSpotData = async function(lat, lng) {
    try {
        //creating hour time slot for api call
        const time = Math.floor(Date.now() / 1000);
        const currentTimeStr = `` + time;
        const hourAgowStr = `` + (time - 3600);
        const api = `9c945fb8-aacd-11ec-a97f-0242ac130002-9c946026-aacd-11ec-a97f-0242ac130002`;
        const data1 = await fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${parameters}&start=${hourAgowStr}&end=${currentTimeStr}`, {
            headers: {
                Authorization: api
            }
        });
        const dataJson = data1.json();
        return dataJson;
    } catch (err) {
        console.log(err.message);
    }
};
const selectedSpot = function(selectedSpot1) {
    curSelectedSpot = selectedSpot1;
};
const selectedLocation = function(latlng) {
    clickLocation = latlng;
};
const selectedSpotData = function() {
    if (!curSelectedSpot) return;
    return data.surfspot[`spot${curSelectedSpot}`];
};
const uploadData = function(sessionData, session) {
    data.surfspot[`spot${curSelectedSpot}`].sessions[session] = sessionData;
};
const newSurfSpot = function(spotName, inputData) {
    data.surfspot[spotName] = {
        name: inputData[0],
        location: {
            name: inputData[1],
            lat: clickLocation[0],
            long: clickLocation[1]
        },
        sessions: {}
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"balrh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SpotView {
    //getting as input the data from the model (api) and renders the spots onto the screen
    #spotContainer = document.querySelector(`.interface__surfspots`);
    displaySpots(spot) {
        this.#spotContainer.innerHTML = "";
        // inserting html for every spot that is selected
        Object.entries(spot.surfspot).forEach((_, ind)=>{
            const spotStr = `spot` + (ind + 1);
            this.#spotContainer.insertAdjacentHTML(`beforeend`, `<div class="surf-spot" action="" data-id="${ind}">
        <h3 class="form__spot-name">Name: 
        ${spot.surfspot[spotStr].name}</h3>
        <h3 class="form__spot-location">Location: ${spot.surfspot[spotStr].location.name}</h3>
        </div>`);
        });
    }
    //adding handler function to the clicks in the spot menu
    addHandlerClick(handler) {
        this.#spotContainer.addEventListener(`click`, handler);
    }
    activeSpot(spot) {
        const allSpots = document.querySelectorAll(`.surf-spot`);
        allSpots.forEach((s)=>s.classList.remove("surf-spot-active"));
        if (typeof spot === "string") {
            const selectedSpot = Array.from(allSpots).filter((spotItem)=>{
                if (spotItem.dataset.id == spot) return spotItem;
            });
            selectedSpot[0].classList.add("surf-spot-active");
            return;
        }
        spot.closest(`.surf-spot`).classList.add("surf-spot-active");
    }
}
exports.default = new SpotView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b2AA2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class MapView {
    #map;
    #mapZoomlevel = 12;
     #clearMap() {
        if (this.#map != undefined) this.#map.remove();
    }
    //ask browser for the current location of the user
     #getLocation() {
        //made a promise so it will wait for a response of the user before rendering the map
        return new Promise((res, rej)=>{
            navigator.geolocation.getCurrentPosition(res, rej);
        });
    }
    async setupMap() {
        //getting the location data and calling map function
        try {
            this.#clearMap();
            const response = await this.#getLocation();
            const { latitude , longitude  } = response.coords;
            this.#loadMap([
                latitude,
                longitude
            ], this.#mapZoomlevel);
        } catch (err) {
            console.log(err.message);
            this.#loadMap();
        }
    }
     #loadMap(latlng = [
        53.0,
        9.0
    ], z = 5) {
        //loading the map with default location or location given by browser
        return new Promise((res, rej)=>{
            this.#map = L.map("map").setView(latlng, z);
            L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.#map);
        });
    }
    // displaying all the surfspots that are currently in the data obj
    displayMarkers(surfspots, clickHandler) {
        const arrSpots = Object.entries(surfspots.surfspot);
        arrSpots.forEach((i, ind)=>{
            const curLat = i[1].location.lat;
            const curLng = i[1].location.long;
            L.marker([
                curLat,
                curLng
            ]).on("click", clickHandler).addTo(this.#map).bindPopup(L.popup({
                maxWidth: 250,
                minWidth: 150,
                autoClose: true,
                className: `spot-popup spot${ind}`,
                closeOnClick: false
            })).setPopupContent(`${i[1].location.name}`);
        });
    }
    // set the map to a given location, for example when a surfspot is clicked.
    setMapToLocation(spot) {
        if (!this.#map) return;
        // prefents error when a surfspot is clicked but there is not map loaded yet.
        const coords = [
            spot.location.lat,
            spot.location.long
        ];
        this.#map.setView(coords, this.#mapZoomlevel);
    }
    // function for later determen where a new spot needs to be rendered
    addHandlerClickMap(handler) {
        // add eventhanlder click on the map
        this.#map.on(`click`, handler);
    }
    //open the marker that has the same classname as the currentSpot input
    openMarker(currentSpot) {
        Object.entries(this.#map._layers).forEach((layer)=>{
            const marker = layer[1].dragging;
            if (!marker) return; //checking if marker has a value
            if (marker._marker._popup.options.className.slice(-5) === currentSpot) marker._marker.openPopup(); // selecting the one that has the same classname and opens the popup from this marker
        });
    }
}
exports.default = new MapView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"01INf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SessionView {
    #session = document.querySelector(".sessions");
    #sessionContainer = document.querySelector(".sessions__sessions");
    #sessionsHeader = document.querySelector(".sessions__spotname");
    clickHandlerSession(handler) {
        this.#session.addEventListener(`click`, handler);
    }
    toggleLongSessionDescription(e) {
        e.closest(".sessions__item").classList.toggle("four-rows");
        e.closest(".sessions__item").lastElementChild.classList.toggle("toggeling");
    }
    // moves up the container into the map
    showContainer() {
        this.#session.style.transform = `translateY(1%)`;
    }
     #clearSessionContainer() {
        this.#sessionContainer.innerHTML = "";
    }
    // calls functions to render the spots from the model data
    loadSpots(spotData) {
        console.log(spotData);
        this.#clearSessionContainer();
        this.#loadHeader(spotData.name);
        this.#loadItems.call(this, spotData.sessions);
    }
    //  changes the header name to the name of the currently selected spot
     #loadHeader(name) {
        this.#sessionsHeader.textContent = `${name}`;
    }
    // creates a list for the star items with unique class names based on the star item
     #listLayout(info, prop) {
        return ` <div class="sessions__item-${prop}">
        <h5 class="sessions__item-rating-header">${prop.slice(0, 1).toUpperCase() + prop.slice(1)}</h5>
        <ul class="rating">
          ${this.#starItems(info, prop)}
        </ul>
      </div>`;
    }
    // make the individual star items and determines where the active is positioned based on the input number
     #starItems(starLocation, reference) {
        let str = "";
        for(let i = 1; i <= 5; i++)str += `<li class="rating-item rating-${reference} ${i === starLocation ? "active" : ""}" data-rate="${i}"></li>`;
        return str;
    }
     #loadItems(data) {
        if (!data.session1) return this.#sessionContainer.insertAdjacentHTML(`afterbegin`, `<h5 class="sessions__no-session">No recorded Sessions! Get your lazy body into the water!`);
        Object.entries(data).forEach((session)=>{
            const sessionData = session[1];
            this.#sessionContainer.insertAdjacentHTML(`afterbegin`, `<div class="sessions__item"> <h4 class="sessions__item-date">${sessionData.date}</h4>${this.#listLayout.call(this, sessionData.strength, "strength")}${this.#listLayout.call(this, sessionData.clean, "clean")}
        ${this.#listLayout.call(this, sessionData.overal, "overal")}
        <div class="sessions__item-extra toggeling"><h5 class="sessions__item-waveheight">Waveheight: ${sessionData.waveheight}M</h5>
        <h5 class="sessions__item-swellheight">SwellHeight: ${sessionData.swellheight}M</h5>
<h5 class="sessions__item-wind">Wind: ${sessionData.wind}</h5>
<h5
class="sessions__item-direction">Wind Direction: ${sessionData.windDirection}</h5>

<div class="sessions__item-image">
    <h5>Picture:</h5>
    <a href="">Image Session</a>
</div>
<div>
<h5 class="sessions__item-description"> Description: ${sessionData.description}</h5>
</div></div>`);
        });
    }
}
exports.default = new SessionView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6WgH4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class AddSessionView {
    #addSessionContainer = document.querySelector(".add__session");
    #addSessionHeader = document.querySelector(".add__session-spot");
    #text = document.querySelector(".add__session-info-text");
    hideSessionForm(selectedSpotName) {
        this.#addSessionContainer.classList.add("hidden");
        this.#addSessionHeader.textContent = selectedSpotName;
    }
    showSessionForm(selectedSpotName) {
        this.#addSessionContainer.classList.remove("hidden");
        this.#addSessionHeader.textContent = selectedSpotName;
    }
    clickHandler(handler) {
        this.#addSessionContainer.addEventListener("click", handler);
    }
     #clearStars(className) {
        document.querySelectorAll(`.${className}`).forEach((item)=>item.classList.remove(`active`));
    }
     #clearText() {
        this.#text.value = "";
    }
    settingStars(element) {
        this.#clearStars(element.classList[1]);
        element.classList.add(`active`);
    }
    // GETTING WHICH STAR IS SELECTED
     #getStarData(condition) {
        const elements = document.querySelectorAll(`.add__session-item-${condition}`);
        const starLocation = Object.entries(elements).filter((element)=>element[1].classList.contains(`active`));
        if (starLocation.length === 0) return undefined;
        return starLocation[0][1].dataset.rate;
    }
    // GETTING IMAGE AND TRANSFORM TO 64BASE
     #getImageData() {
        const imageEl = document.querySelector("#image-upload").files[0];
        const reader = new FileReader();
        reader.onloadend = function() {
            const results = reader.result;
            return results;
        };
        const image = reader.readAsDataURL(imageEl);
    }
     #getTextData() {
        return this.#text.value;
    }
    getInputData() {
        // console.log(this.#getStarData(`strength`));
        return {
            strength: this.#getStarData(`strength`),
            clean: this.#getStarData(`clean`),
            overal: this.#getStarData(`condition`),
            description: this.#getTextData()
        };
    // this.#getImageData();
    }
    clearAndClose() {
        this.#clearStars("add__session-item-strength");
        this.#clearStars("add__session-item-condition");
        this.#clearStars("add__session-item-clean");
        this.#clearText();
        this.hideSessionForm();
    }
}
exports.default = new AddSessionView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kBFDp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class MarkupView {
    #newSessionButton = document.querySelector(".button__new-session");
    newSessionClickHandler(handler) {
        this.#newSessionButton.addEventListener(`click`, handler);
    }
}
exports.default = new MarkupView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8QpnA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class ModalView {
    #modal = document.querySelector(".modal");
    #overlay = document.querySelector(`.overlay`);
    #closeButton = document.querySelector(`.modal__close`);
    toggleModal() {
        this.#modal.classList.toggle("hidden");
        this.#overlay.classList.toggle("hidden");
    }
    closeHandler(handler) {
        [
            this.#overlay,
            this.#closeButton
        ].forEach((obj)=>obj.addEventListener(`click`, handler));
    }
}
exports.default = new ModalView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kqLVa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class AddSpotView {
    #addSpotContainer = document.querySelector(`.add__spot`);
    #submitButton = document.querySelector(`.add__spot-submit`);
    #inputName = document.querySelector(`.add__spot-name-input`);
    #inputLocation = document.querySelector(`.add__spot-location-input`);
    hideSpotForm() {
        this.#addSpotContainer.classList.add(`hidden`);
    }
    showSpotForm() {
        this.#addSpotContainer.classList.remove(`hidden`);
    }
    clickHandler(handler) {
        this.#submitButton.addEventListener(`click`, handler);
    }
    getInputData() {
        const nameData = this.#inputName.value;
        const locationData = this.#inputLocation.value;
        if (!nameData) {
            this.#inputName.classList.add("invalid-input");
            return;
        }
        if (!locationData) {
            this.#inputLocation.classList.add("invalid-input");
            return;
        }
        [
            this.#inputName,
            this.#inputLocation
        ].forEach((el)=>el.classList.remove("invalid-input"));
        return [
            nameData,
            locationData
        ];
    }
    clearFields() {
        this.#inputName.value = this.#inputLocation.value = "";
    }
}
exports.default = new AddSpotView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["2kSJi","aenu9"], "aenu9", "parcelRequireefef")

//# sourceMappingURL=index.e37f48ea.js.map
