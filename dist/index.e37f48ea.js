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
var _helper = require("./helper");
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
var _loginView = require("./views/loginView");
var _loginViewDefault = parcelHelpers.interopDefault(_loginView);
var _createUserView = require("./views/createUserView");
var _createUserViewDefault = parcelHelpers.interopDefault(_createUserView);
const closeModal = function(e) {
    e.preventDefault();
    (0, _modalViewDefault.default).toggleModal();
    _helper.hideAllModelContent();
};
////////////////////////////////////////////////////////////
//                                                        //
//                        LOGIN                           //
//                                                        //
////////////////////////////////////////////////////////////
const loginModalButtonHandler = function(e) {
    e.preventDefault();
    const target = e.target.classList;
    if (target.contains(`user__login-submit`)) loginSubmit();
    if (target.contains(`user__login-new-user`)) openCreateUser();
};
const loginSubmit = async function() {
    const userInfo = (0, _loginViewDefault.default).getData();
    const check = await _model.login(userInfo);
    if (check !== 406) {
        localStorage.setItem("user", userInfo.username);
        localStorage.setItem("password", userInfo.password);
        localStorage.setItem("api", check);
        _helper.hideAllModelContent();
        (0, _modalViewDefault.default).toggleModal();
    }
};
const login = function(e) {
    e.preventDefault();
    (0, _modalViewDefault.default).toggleModal();
    _helper.hideAllModelContent();
    (0, _loginViewDefault.default).showLoginForm();
};
////////////////////////////////////////////////////////////
//                                                        //
//                     CREATE USER                        //
//                                                        //
////////////////////////////////////////////////////////////
const openCreateUser = function() {
    _helper.hideAllModelContent();
    (0, _createUserViewDefault.default).showCreateForm();
};
const createUserSubmit = async function(e) {
    e.preventDefault();
    const newUserInfo = (0, _createUserViewDefault.default).getData();
    if (newUserInfo.username, newUserInfo.password, newUserInfo.api === "") return;
    const key = await _model.createUser(newUserInfo);
};
////////////////////////////////////////////////////////////
//                                                        //
//                     MAP EVENTS                         //
//                                                        //
////////////////////////////////////////////////////////////
// move to clicked location on left menu
const moveMapToSpot = function(e) {
    //checking if the selected item is a spot
    if (e.target.parentNode.className !== `surf-spot`) return;
    // get the id number out of selected item
    const selectedSpotNumber = Number(e.target.parentNode.dataset.id);
    // updating selected spot
    _model.selectedSpot(selectedSpotNumber);
    const modelSpot = _model.data[selectedSpotNumber];
    //set map to location
    (0, _mapViewDefault.default).setMapToLocation(modelSpot);
    //open corresponding popup
    (0, _mapViewDefault.default).openMarker(`spot${selectedSpotNumber}`);
    //show graphic selected spot
    (0, _spotViewDefault.default).activeSpot(e.target);
    // display the session window and show all the sessions
    displaySessions(modelSpot);
};
let timer; //timer to prefent click error from leaflet
// get info selected marker and select in spot menu
const markerClickHandler = function(e) {
    const markerSpot = e.target._popup.options.className.slice(-1);
    (0, _spotViewDefault.default).activeSpot(markerSpot);
    // update current active spot
    _model.selectedSpot(markerSpot);
    //show the sessions connected with the spot
    displaySessions(_model.data[markerSpot]);
    // small timeout for the popup. A bug in leaflet make every click double click and make it that the popup doesnt show. This popup filters excidental double clicks
    if (Date.now() >= timer + 1800 || !timer) {
        console.log(timer);
        timer = cooldown(markerSpot);
    }
};
const cooldown = function(markerSpot) {
    (0, _mapViewDefault.default).openMarker(`spot${markerSpot}`);
    return Date.now();
};
////////////////////////////////////////////////////////////
//                                                        //
//                SESSION MENU EVENTS                     //
//                                                        //
////////////////////////////////////////////////////////////
// display sessions in left menu
const displaySessions = function(selectedSpot) {
    (0, _sessionViewDefault.default).showContainer();
    (0, _sessionViewDefault.default).loadSpots(selectedSpot);
};
//show extended info on click session
const sessionClickHandler = function(e) {
    (0, _sessionViewDefault.default).toggleLongSessionDescription(e.target);
};
// new session button click
const openModalNewSession = function(e) {
    e.preventDefault();
    // get data of the current active spot
    const curSpotData = _model.selectedSpotData();
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
    (0, _modalViewDefault.default).toggleModal();
    (0, _addSessionViewDefault.default).showSessionForm(curSpotData.name);
};
////////////////////////////////////////////////////////////
//                                                        //
//                      NEW SESSION                       //
//                                                        //
////////////////////////////////////////////////////////////
// event handler to clicks modal session buttons
const modalClicksSessions = function(e) {
    const targetEl = e.target;
    if (targetEl.classList.contains("add__session-rating-item")) (0, _addSessionViewDefault.default).settingStars(targetEl);
    if (targetEl.classList.contains(`add__session-submit`)) {
        e.preventDefault();
        newSessionSubmit(targetEl);
    }
};
// validating data out of new session
const newSessionSubmit = function() {
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
// get data from stormglass and formats it
const formatAndUpload = async function(data) {
    try {
        const conditionData = await stormglassAPICall();
        const resultObj = {
            ...conditionData,
            strength: +data.strength,
            clean: +data.clean,
            overal: +data.overal,
            description: data.description
        };
        // updating data to model
        const response = await _model.uploadData(resultObj);
        if (response === 201) {
            await _model.getData();
            displaySessions(_model.data[_model.curSelectedSpot]);
        }
    } catch (err) {
        console.log(err.message);
    }
};
// make api call for current selected location
const stormglassAPICall = async function() {
    try {
        // getting lat and long from the current selected spot
        const { lat: curSpotLat , long: curSpotLong  } = _model.data[_model.curSelectedSpot].spot;
        // call stormglass api for data
        const { hours  } = await _model.getSpotData(curSpotLat, curSpotLong);
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
const getMarkerPosition = function(mapE) {
    if (!localStorage.getItem("user")) {
        window.alert("Login before Creating a new Spot");
        return;
    }
    const { lat , lng  } = mapE.latlng;
    // open modal window to add spot
    (0, _modalViewDefault.default).toggleModal();
    (0, _addSpotViewDefault.default).showSpotForm();
    // save clicked location in model
    _model.selectedLocation([
        lat,
        lng
    ]);
};
const submitClickHandlerSpots = async function(e) {
    try {
        e.preventDefault();
        //get data out of input fields
        const data = (0, _addSpotViewDefault.default).getInputData();
        // validate data
        if (!data) return;
        const result = await _model.newSurfSpot(data);
        console.log(result);
        if (result === 201) {
            await _model.getData(); //get data from the api to rerender spots
            (0, _spotViewDefault.default).displaySpots(_model.data);
            (0, _mapViewDefault.default).displayMarkers(_model.data, markerClickHandler);
            (0, _modalViewDefault.default).toggleModal();
            (0, _addSpotViewDefault.default).clearFields();
            (0, _addSpotViewDefault.default).hideSpotForm();
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
const init = async function() {
    try {
        (0, _loginViewDefault.default).buttonClick(loginModalButtonHandler);
        (0, _createUserViewDefault.default).submitHandler(createUserSubmit);
        (0, _modalViewDefault.default).closeHandler(closeModal);
        await _model.getData();
        await (0, _mapViewDefault.default).setupMap();
        (0, _spotViewDefault.default).displaySpots(_model.data);
        (0, _spotViewDefault.default).addHandlerClick(moveMapToSpot);
        (0, _mapViewDefault.default).displayMarkers(_model.data, markerClickHandler);
        (0, _mapViewDefault.default).addHandlerClickMap(getMarkerPosition);
        (0, _sessionViewDefault.default).clickHandlerSession(sessionClickHandler);
        (0, _markupViewDefault.default).newSessionClickHandler(openModalNewSession);
        (0, _markupViewDefault.default).loginClickHandler(login);
        (0, _addSessionViewDefault.default).clickHandler(modalClicksSessions);
        (0, _addSpotViewDefault.default).clickHandler(submitClickHandlerSpots);
    } catch (err) {
        console.log(err.message);
    }
};
init(); //////////////////////////////////////////////////////////////////////

},{"./model":"Y4A21","./views/spotView":"balrh","./views/modalView":"8QpnA","./views/mapView":"b2AA2","./views/sessionView":"01INf","./views/addSessionView":"6WgH4","./views/markupView":"kBFDp","./views/addSpotView":"kqLVa","./views/loginView":"1Ao0H","./views/createUserView":"kuQ0B","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./helper":"lVRAz"}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clickLocation", ()=>clickLocation);
parcelHelpers.export(exports, "curSelectedSpot", ()=>curSelectedSpot);
parcelHelpers.export(exports, "data", ()=>data);
parcelHelpers.export(exports, "getSpotData", ()=>getSpotData);
parcelHelpers.export(exports, "selectedSpot", ()=>selectedSpot);
parcelHelpers.export(exports, "selectedLocation", ()=>selectedLocation);
parcelHelpers.export(exports, "selectedSpotData", ()=>selectedSpotData);
parcelHelpers.export(exports, "uploadData", ()=>uploadData);
parcelHelpers.export(exports, "newSurfSpot", ()=>newSurfSpot);
parcelHelpers.export(exports, "createUser", ()=>createUser);
parcelHelpers.export(exports, "login", ()=>login);
parcelHelpers.export(exports, "getData", ()=>getData);
parcelHelpers.export(exports, "createSpot", ()=>createSpot);
var _config = require("./config");
let clickLocation;
let curSelectedSpot;
let data;
const getSpotData = async function(lat, lng) {
    try {
        //creating hour time slot for api call
        const time = Math.floor(Date.now() / 1000);
        const currentTimeStr = `` + time;
        const hourAgowStr = `` + (time - 3600);
        const api = localStorage.getItem("api");
        const data1 = await fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${_config.parameters}&start=${hourAgowStr}&end=${currentTimeStr}`, {
            headers: {
                Authorization: api
            }
        });
        return data1.json();
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
    return data[curSelectedSpot];
};
const uploadData = async function(sessionData) {
    try {
        const result = await createSession(sessionData);
        return result;
    } catch (err) {
        return err.message;
    }
};
const newSurfSpot = async function(inputData) {
    try {
        const result = await createSpot(inputData[0], inputData[1], clickLocation[0], clickLocation[1]);
        return result;
    } catch (err) {
        return err;
    }
};
const createUser = async function(newUserInfo) {
    try {
        const userInfo = JSON.stringify(newUserInfo);
        const upload = await fetch(`http://127.0.0.1:8000/user?data=${userInfo}`, {
            method: "POST",
            header: {
                "Content-Type": "application/json"
            }
        });
        return upload.json();
    } catch (err) {
        return err.message;
    }
};
const login = async function(userInfo) {
    try {
        const upload = await fetch(`http://127.0.0.1:8000/user/login?username=${userInfo.username}&password=${userInfo.password}`, {
            method: "GET",
            header: {
                "Content-Type": "application/json"
            }
        });
        return upload.json();
    } catch (err) {
        return err.message;
    }
};
const getData = async function() {
    try {
        const result = await fetch(`http://127.0.0.1:8000/spot/all`, {
            method: "GET",
            header: {
                "Content-Type": "application/json"
            }
        }).then((response)=>response.json());
        data = result;
    } catch (err) {
        return err.message;
    }
};
const createSpot = async function(name, spotName, lat, long) {
    try {
        const request = JSON.stringify({
            name: name,
            location: [
                lat,
                long
            ],
            secondName: spotName
        });
        const upload = await fetch(`http://127.0.0.1:8000/spot/create?data=${request}`, {
            method: "POST",
            header: {
                "Content-Type": "application/json"
            }
        });
        return upload.json();
    } catch (err) {
        return err.message;
    }
};
const createSession = async function(forcastData) {
    try {
        const forcastStr = JSON.stringify(forcastData);
        const response = await fetch(`http://127.0.0.1:8000/session/create/${curSelectedSpot}?forcast=${forcastStr}`, {
            method: "POST",
            header: {
                "Content-Type": "application/json"
            }
        });
        return response.json();
    } catch (err) {
        return err.message;
    }
};

},{"./config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parameters", ()=>parameters);
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
        // console.log(spot);
        this.#spotContainer.innerHTML = "";
        // inserting html for every spot that is selected
        Object.entries(spot).forEach((item, ind)=>{
            const spotStr = `spot` + (ind + 1);
            this.#spotContainer.insertAdjacentHTML(`beforeend`, `<div class="surf-spot" action="" data-id="${ind + 1}">
        <h3 class="form__spot-name">Name: 
        ${item[1].spot.name}</h3>
        <h3 class="form__spot-location">Location: ${item[1].spot.sec_name}</h3>
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
        const arrSpots = Object.entries(surfspots);
        arrSpots.forEach((i, ind)=>{
            const curLat = i[1].spot.lat;
            const curLng = i[1].spot.long;
            L.marker([
                curLat,
                curLng
            ]).on("click", clickHandler).addTo(this.#map).bindPopup(L.popup({
                maxWidth: 250,
                minWidth: 150,
                autoClose: true,
                className: `spot-popup spot${ind + 1}`,
                closeOnClick: false
            })).setPopupContent(`${i[1].spot.name}`);
        });
    }
    // set the map to a given location, for example when a surfspot is clicked.
    setMapToLocation(spot) {
        if (!this.#map) return;
        // prefents error when a surfspot is clicked but there is not map loaded yet.
        const coords = [
            spot.spot.lat,
            spot.spot.long
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
            if (marker._marker._popup.options.className.slice(-5) === currentSpot) {
                marker._marker.openPopup();
                console.log(marker);
            }
        // selecting the one that has the same classname and opens the popup from this marker
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
        const closestSessionItem = e.closest(".sessions__item");
        if (!closestSessionItem) return;
        closestSessionItem.classList.toggle("four-rows");
        closestSessionItem.lastElementChild.classList.toggle("toggeling");
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
        this.#clearSessionContainer();
        this.#loadHeader(spotData.spot.name);
        this.#loadItems.call(this, spotData);
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
        if (!data.sessions) return this.#sessionContainer.insertAdjacentHTML(`afterbegin`, `<h5 class="sessions__no-session">No recorded Sessions! Get your lazy body into the water!`);
        data.sessions.forEach((session)=>{
            const sessionData = session[1];
            this.#sessionContainer.insertAdjacentHTML(`afterbegin`, `<div class="sessions__item"> <h4 class="sessions__item-date">${session.date}</h4>${this.#listLayout.call(this, session.strength, "strength")}${this.#listLayout.call(this, session.clean, "clean")}
        ${this.#listLayout.call(this, session.overal, "overal")}
        <div class="sessions__item-extra toggeling"><h5 class="sessions__item-waveheight">Waveheight: ${session.waveHeight}M</h5>
        <h5 class="sessions__item-swellheight">SwellHeight: ${session.swellHeight}M</h5>
<h5 class="sessions__item-wind">Wind: ${session.windSpeed}</h5>
<h5
class="sessions__item-direction">Wind Direction: ${session.windDirection}</h5>

<div class="sessions__item-image">
    <h5>Picture:</h5>
    <a href="">Image Session</a>
</div>
<div>
<h5 class="sessions__item-description"> Description: ${session.description}</h5>
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
    }
}
exports.default = new AddSessionView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kBFDp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class MarkupView {
    #newSessionButton = document.querySelector(".button__new-session");
    #loginButton = document.querySelector(".login__button");
    newSessionClickHandler(handler) {
        this.#newSessionButton.addEventListener(`click`, handler);
    }
    loginClickHandler(handler) {
        this.#loginButton.addEventListener(`click`, handler);
    }
}
exports.default = new MarkupView();

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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Ao0H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class LoginView {
    #usernameInput = document.querySelector(`.user__login-name-input`);
    #passwordInput = document.querySelector(`.user__login-password-input`);
    #userLogin = document.querySelector(`.user__login`);
    buttonClick(handler) {
        this.#userLogin.addEventListener("click", handler);
    }
    getData() {
        const username = this.#usernameInput.value;
        const password = this.#passwordInput.value;
        return {
            username: username,
            password: password
        };
    }
    hideLoginForm() {
        this.#userLogin.classList.add("hidden");
    }
    showLoginForm() {
        this.#userLogin.classList.remove("hidden");
    }
}
exports.default = new LoginView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kuQ0B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class CreateUserView {
    #username = document.querySelector(".create__user-name-input");
    #password = document.querySelector(".create__user-password-input");
    #api = document.querySelector(".create__user-api-input");
    #submit = document.querySelector(".create__user-submit");
    #createUser = document.querySelector(".create__user");
    submitHandler(handler) {
        this.#submit.addEventListener("click", handler);
    }
    getData() {
        const username = this.#username.value;
        const password = this.#password.value;
        const api = this.#api.value;
        return {
            username: `${username}`,
            password: `${password}`,
            apiKey: `${api}`
        };
    }
    hideCreateForm() {
        this.#createUser.classList.add("hidden");
    }
    showCreateForm() {
        this.#createUser.classList.remove("hidden");
    }
}
exports.default = new CreateUserView(); // username: username,
 //       password: password,
 //       apiKey: api,

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lVRAz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hideAllModelContent", ()=>hideAllModelContent);
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
var _loginView = require("./views/loginView");
var _loginViewDefault = parcelHelpers.interopDefault(_loginView);
var _createUserView = require("./views/createUserView");
var _createUserViewDefault = parcelHelpers.interopDefault(_createUserView);
const hideAllModelContent = function() {
    (0, _addSessionViewDefault.default).hideSessionForm();
    (0, _addSpotViewDefault.default).hideSpotForm();
    (0, _loginViewDefault.default).hideLoginForm();
    (0, _createUserViewDefault.default).hideCreateForm();
};

},{"./views/spotView":"balrh","./views/modalView":"8QpnA","./views/mapView":"b2AA2","./views/sessionView":"01INf","./views/addSessionView":"6WgH4","./views/markupView":"kBFDp","./views/addSpotView":"kqLVa","./views/loginView":"1Ao0H","./views/createUserView":"kuQ0B","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["2kSJi","aenu9"], "aenu9", "parcelRequireefef")

//# sourceMappingURL=index.e37f48ea.js.map
