/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


document.addEventListener("DOMContentLoaded", () => {
  let items = [];
  const container = document.getElementById("container");
  const addBtn = document.getElementById("add-btn");
  let bill = document.getElementById("bill");
  let rate18 = /** @type {HTMLInputElement} */ (
    document.getElementById("rate18")
  );
  let rate22 = /** @type {HTMLInputElement} */ (
    document.getElementById("rate22")
  );
  let rate24 = /** @type {HTMLInputElement} */ (
    document.getElementById("rate24")
  );

  function ensureAtLeastOneItem() {
    if (items.length === 0) addDuplicateDiv();
  }

  function updateBill() {
    const div = document.createElement("div");
    let totalAmount = 0;
    for (let i in items) {
      let rate = items[i].type == "18K" ? rate18.value : rate22.value;
      items[i].wastage =
        ((items[i].grosswgt - items[i].less) *
          (items[i].touch / 100) *
          rate24.value) /
          rate -
        (items[i].grosswgt - items[i].less);
      let amount =
        (parseFloat(items[i].grosswgt - items[i].less) +
          parseFloat(items[i].wastage)) *
          parseFloat(rate) +
        parseFloat(items[i].stone);

      totalAmount += amount;
      div.innerHTML += `<span class="text-base text-center">${
        items[i].name
      } - ${items[i].type}</span>
      <div class="flex justify-between text-base">
        <span>Weight</span>
        <span>${items[i].grosswgt}</span>
      </div>
      <div class="flex justify-between text-base">
        <span>(-)Less</span>
        <span>${items[i].less}</span>
      </div>
      <div class="flex justify-between text-base">
        <span>Wastage@${(
          (items[i].wastage * 100) /
          (items[i].grosswgt - items[i].less)
        ).toFixed(2)}</span>
        <span>${items[i].wastage.toFixed(3)}</span>
      </div>
      <div class="flex justify-between text-base">
        <span>S. Charges</span>
        <span>${items[i].stone}</span>
      </div>
      <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <div class="flex justify-between">
        <span class="text-lg">(${(items[i].grosswgt - items[i].less).toFixed(
          3
        )} + ${items[i].wastage.toFixed(3)}) * ${rate} + ${
        items[i].stone
      }</span>
        <span class="text-lg">${amount.toFixed(0)}</span>
      </div>
      <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />`;
    }
    if (items.length > 0) {
      div.innerHTML += `<div class="flex justify-between text-2xl">
        <span>Amount</span>
        <span>${totalAmount.toFixed(0)}</span>
      </div>
      <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700" />`;
    }
    bill.innerHTML = div.innerHTML;
  }

  function formUpdate(id, value) {
    let [key, i] = id.split("_");
    for (let k in items) {
      if (`${items[k].id}` === i) {
        items[k][key] = value;
      }
    }
    updateBill();
  }

  function addDuplicateDiv() {
    const id = Date.now();
    const div = document.createElement("div");
    div.id = `item-${id}`;
    div.innerHTML = `
      <div class="grid grid-cols-2 bg-gray-50 hover:bg-gray-100 p-4 cursor-pointer rounded-md border border-gray-300 transition-colors duration-300">
          <div class="p-1 bg-white rounded-lg font-mono">
            <label class="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input id="${
              "name_" + id
            }" class="bg-gray-50 hover:bg-gray-100 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 " placeholder="Enter text here" type="text" />
          </div>
          <div class="p-1 bg-white rounded-lg font-mono">
            <label class="block text-gray-700 text-sm font-bold mb-2">Weight</label>
            <input id="${
              "grosswgt_" + id
            }" class="bg-gray-50 hover:bg-gray-100 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 " placeholder="Enter text here" type="text" />
          </div>
          <div class="p-1 bg-white rounded-lg font-mono">
            <label class="block text-gray-700 text-sm font-bold mb-2">Touch</label>
            <input id="${
              "touch_" + id
            }" class="bg-gray-50 hover:bg-gray-100 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 " placeholder="Enter text here" type="text" />
          </div>
          <div class="p-1 bg-white rounded-lg font-mono">
            <label class="block text-gray-700 text-sm font-bold mb-2">S. Charges</label>
            <input id="${
              "stone_" + id
            }" class="bg-gray-50 hover:bg-gray-100 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 " placeholder="Enter text here" type="text" />
          </div>
          <div class="p-1 bg-white rounded-lg font-mono">
            <label class="block text-gray-700 text-sm font-bold mb-2">Type</label>
            <select id="${
              "type_" + id
            }" class="bg-gray-50 hover:bg-gray-100 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 ">
              <option value="18K">18K</option>
              <option value="22K">22K</option>
            </select>
          </div>
          <div class="p-1 bg-white rounded-lg font-mono">
            <label class="block text-gray-700 text-sm font-bold mb-2">Less</label>
            <input id="${
              "less_" + id
            }" class="bg-gray-50 hover:bg-gray-100 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 " placeholder="Enter text here" type="text" />
          </div>
        <button class="remove-btn col-span-2 mt-4 px-4 py-2 bg-red-500 text-white rounded-lg shadow" data-id="${id}">Remove</button>
      </div>
    `;
    container.appendChild(div);
    document.getElementById("name_" + id).addEventListener("input", (e) => {
      formUpdate("name_" + id, e.target.value);
    });
    document.getElementById("grosswgt_" + id).addEventListener("input", (e) => {
      formUpdate("grosswgt_" + id, e.target.value);
    });
    document.getElementById("touch_" + id).addEventListener("input", (e) => {
      formUpdate("touch_" + id, e.target.value);
    });
    document.getElementById("type_" + id).addEventListener("input", (e) => {
      formUpdate("type_" + id, e.target.value);
    });
    document.getElementById("stone_" + id).addEventListener("input", (e) => {
      formUpdate("stone_" + id, e.target.value);
    });
    document.getElementById("less_" + id).addEventListener("input", (e) => {
      formUpdate("less_" + id, e.target.value);
    });
    items.push({
      id,
      name: "",
      type: "18K",
      touch: "",
      grosswgt: "",
      wastage: "0",
      stone: "",
      less: "",
    });
    updateBill();
  }

  function removeDiv(event) {
    const id = event.target.getAttribute("data-id");
    if (items.length <= 1) return;

    document.getElementById(`item-${id}`)?.remove();
    items = items.filter((item) => item.id !== parseInt(id, 10));
    updateBill();
    ensureAtLeastOneItem();
  }

  if (!container.dataset.listenerAdded) {
    container.addEventListener("click", (event) => {
      if (event.target.classList.contains("remove-btn")) {
        removeDiv(event);
      }
    });
    container.dataset.listenerAdded = "true";
  }

  if (!addBtn.dataset.listenerAdded) {
    addBtn.addEventListener("click", () => {
      addDuplicateDiv();
    });
    addBtn.dataset.listenerAdded = "true";
  }

  if (!rate18.dataset.listenerAdded) {
    rate18.addEventListener("input", (ev) => {
      updateBill();
    });
    rate18.dataset.listenerAdded = "true";
  }

  if (!rate22.dataset.listenerAdded) {
    rate22.addEventListener("input", (ev) => {
      updateBill();
    });
    rate22.dataset.listenerAdded = "true";
  }

  if (!rate24.dataset.listenerAdded) {
    rate24.addEventListener("input", (ev) => {
      updateBill();
    });
    rate24.dataset.listenerAdded = "true";
  }
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map