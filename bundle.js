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


let countries = [
  { name: "Ladies Kada", code: "LK" },
  { name: "Gents Kada", code: "GK" },
  { name: "Gokuru", code: "GO" },
  { name: "Patla", code: "PT" },
  { name: "RG Bracelet", code: "RGB" },
  { name: "MOP Pendent Set", code: "MPS" },
  { name: "NOP Necklace", code: "MN" },
  { name: "Gajra", code: "GJ" },
  { name: "Antique Bangle", code: "AB" },
  { name: "Damara Bangle", code: "DB" },
  { name: "Strap", code: "ST" },
  { name: "String Necklace", code: "SN" },
  { name: "Watch", code: "WC" },
];

document.addEventListener("DOMContentLoaded", () => {
  let items = [];
  const container = document.getElementById("container");
  const addBtn = document.getElementById("add-btn");
  const addOldBtn = document.getElementById("add-old-btn");
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
  let gst = /** @type {HTMLInputElement} */ (document.getElementById("gst"));

  function onkeyUp(e, id) {
    let keyword = e.target.value;
    let dropdownEl = document.querySelector("#dropdown_" + id);
    dropdownEl.classList.remove("hidden");
    let filteredCountries = countries.filter((c) =>
      c.name.toLowerCase().includes(keyword.toLowerCase())
    );
    renderOptions(filteredCountries, id);
  }

  function renderOptions(options, id) {
    let dropdownEl = document.querySelector("#dropdown_" + id);
    dropdownEl.innerHTML = "";

    options.forEach((country) => {
      let div = document.createElement("div");
      div.id = `${country.code}_${id}`;
      div.className =
        "px-5 py-3 border-b border-gray-200 text-stone-600 cursor-pointer hover:bg-slate-100 transition-colors";
      div.innerHTML = country.name;
      dropdownEl.appendChild(div);

      document
        .getElementById(country.code + "_" + id)
        .addEventListener("click", () => {
          selectOption(country.name, id);
        });
    });
  }

  function selectOption(selectedOption, id) {
    hideDropdown(id);
    let input = document.querySelector("#name_" + id);
    input.value = selectedOption;
    formUpdate("name_" + id, selectedOption);
  }

  function hideDropdown(id) {
    let dropdownEl = document.querySelector("#dropdown_" + id);
    dropdownEl.classList.add("hidden");
  }

  function ensureAtLeastOneItem() {
    if (items.length === 0) addDuplicateDiv();
  }

  function getGoldRates() {
    const url = "http://raspberrypi:8000/gold-rates";
    // fetch(url)
    //   .then((res) => {
    //     if (res.ok) {
    //       return res.json();
    //     }
    //   })
    //   .then((res) => {
    //     rate18.value = res.gold_rates[1];
    //     rate22.value = res.gold_rates[0];
    //   })
    //   .catch((e) => {});
  }

  function updateBill() {
    const div = document.createElement("div");
    let totalAmount = 0;
    let totalGST = 0;
    for (let i in items) {
      if (items[i].type == "Old") {
        let amount =
          parseFloat(items[i].grosswgt - items[i].less) *
          (items[i].touch / 100) *
          parseFloat(rate24.value);
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
      <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <div class="flex justify-between">
        <span class="text-sm font-bold">${(
          items[i].grosswgt - items[i].less
        ).toFixed(3)} * ${items[i].touch} * ${rate24.value}</span>
        <span class="text-sm font-bold">${amount.toFixed(0)}</span>
      </div>
      <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />`;
        totalAmount -= amount;
      } else {
        let rate = items[i].type == "18K" ? rate18.value : rate22.value;
        items[i].wastage =
          ((items[i].grosswgt - items[i].less) *
            (items[i].touch / 100) *
            rate24.value) /
            rate -
          (items[i].grosswgt - items[i].less);
        if (!gst.checked) {
          items[i].wastage +=
            (((parseFloat(items[i].grosswgt - items[i].less) +
              parseFloat(items[i].wastage)) *
              parseFloat(rate) +
              parseFloat(items[i].stone)) *
              0.03) /
            rate;
        }
        let amount =
          (parseFloat(items[i].grosswgt - items[i].less) +
            parseFloat(items[i].wastage)) *
            parseFloat(rate) +
          parseFloat(items[i].stone);
        let g = gst.checked ? (amount * 3) / 100 : 0;

        totalAmount += amount + g;
        totalGST += g;
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
        <span class="text-sm font-bold">(${(
          items[i].grosswgt - items[i].less
        ).toFixed(3)} + ${items[i].wastage.toFixed(3)}) * ${rate} + ${
          items[i].stone
        }</span>
        <span class="text-sm font-bold">${amount.toFixed(0)}</span>
      </div>
      <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />`;
      }
    }
    if (items.length > 0) {
      div.innerHTML += `
      ${
        gst.checked
          ? `<div class="flex justify-between text-2xl font-thin">
        <span>GST</span>
        <span>${totalGST.toFixed(0)}</span>
      </div>`
          : ``
      }
      <div class="flex justify-between text-2xl font-thin">
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
      <div class="grid grid-cols-2 hover:bg-gray-100 p-4 cursor-pointer rounded-md transition-colors duration-300">
          <div class="p-1 rounded-lg font-mono hover:bg-gray-100">
            <label class="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <div onclick="event.stopImmediatePropagation();">
              <input
                id="${"name_" + id}" 
                placeholder="Product Name"
                class="bg-gray-50 hover:bg-gray-100 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300"
              />
              <div
                id="${"dropdown_" + id}"
                class="h-60 rounded-md bg-white absolute z-10 overflow-y-auto hidden"
              ></div>
            </div>
          </div>
          <div class="p-1 rounded-lg font-mono hover:bg-gray-100">
            <label class="block text-gray-700 text-sm font-bold mb-2">Weight</label>
            <input id="${
              "grosswgt_" + id
            }" type="number" class="bg-gray-50 hover:bg-gray-100 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 " placeholder="Weight" type="text" />
          </div>
          <div class="p-1 rounded-lg font-mono hover:bg-gray-100">
            <label class="block text-gray-700 text-sm font-bold mb-2">Less</label>
            <input id="${
              "less_" + id
            }" value=0 type="number" class="bg-gray-50 hover:bg-gray-100 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 " placeholder="Less" type="text" />
          </div>
          <div class="p-1 rounded-lg font-mono hover:bg-gray-100">
            <label class="block text-gray-700 text-sm font-bold mb-2">Touch</label>
            <input id="${
              "touch_" + id
            }" type="number" class="bg-gray-50 hover:bg-gray-100 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 " placeholder="Touch" type="text" />
          </div>
          <div class="p-1 rounded-lg font-mono hover:bg-gray-100">
            <label class="block text-gray-700 text-sm font-bold mb-2">S. Charges</label>
            <input id="${
              "stone_" + id
            }" value=0 type="number" class="bg-gray-50 hover:bg-gray-100 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 " placeholder="Stone Charges" type="text" />
          </div>
          <div class="p-1 rounded-lg font-mono hover:bg-gray-100">
            <label class="block text-gray-700 text-sm font-bold mb-2">Type</label>
            <select id="${
              "type_" + id
            }" class="bg-gray-50 hover:bg-gray-100 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 ">
              <option value="18K">18K</option>
              <option value="22K">22K</option>
            </select>
          </div>
        <button class="remove-btn col-span-2 mt-4 px-4 py-2 bg-red-500 text-white rounded-lg shadow" data-id="${id}">Remove</button>
      </div>
    `;
    container.appendChild(div);
    document.getElementById("name_" + id).addEventListener("keyup", (e) => {
      onkeyUp(e, id);
    });
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
    renderOptions(countries, id);
    items.push({
      id,
      name: "",
      type: "18K",
      touch: "0",
      grosswgt: "0",
      wastage: "0",
      stone: "0",
      less: "0",
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

  function addOldDiv() {
    const id = Date.now();
    const div = document.createElement("div");
    div.id = `item-${id}`;
    div.innerHTML = `
      <div class="grid grid-cols-2 hover:bg-gray-100 p-4 cursor-pointer rounded-md transition-colors duration-300">
          <div class="p-1 rounded-lg font-mono hover:bg-gray-100">
            <label class="block text-gray-700 text-sm font-bold mb-2">Weight</label>
            <input id="${
              "grosswgt_" + id
            }" type="number" class="bg-gray-50 hover:bg-gray-100 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 " placeholder="Weight" type="text" />
          </div>
          <div class="p-1 rounded-lg font-mono hover:bg-gray-100">
            <label class="block text-gray-700 text-sm font-bold mb-2">Less</label>
            <input id="${
              "less_" + id
            }" value=0 type="number" class="bg-gray-50 hover:bg-gray-100 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 " placeholder="Less" type="text" />
          </div>
          <div class="p-1 rounded-lg font-mono hover:bg-gray-100">
            <label class="block text-gray-700 text-sm font-bold mb-2">Touch</label>
            <input id="${
              "touch_" + id
            }" type="number" class="bg-gray-50 hover:bg-gray-100 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 " placeholder="Touch" type="text" />
          </div>
        <button class="remove-btn col-span-2 mt-4 px-4 py-2 bg-red-500 text-white rounded-lg shadow" data-id="${id}">Remove</button>
      </div>
    `;
    container.appendChild(div);
    document.getElementById("grosswgt_" + id).addEventListener("input", (e) => {
      formUpdate("grosswgt_" + id, e.target.value);
    });
    document.getElementById("touch_" + id).addEventListener("input", (e) => {
      formUpdate("touch_" + id, e.target.value);
    });
    document.getElementById("less_" + id).addEventListener("input", (e) => {
      formUpdate("less_" + id, e.target.value);
    });
    items.push({
      id,
      name: "Old",
      type: "Old",
      touch: "0",
      grosswgt: "0",
      less: "0",
    });
    updateBill();
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

  if (!addOldBtn.dataset.listenerAdded) {
    addOldBtn.addEventListener("click", () => {
      addOldDiv();
    });
    addOldBtn.dataset.listenerAdded = "true";
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
  if (!gst.dataset.listenerAdded) {
    gst.addEventListener("input", (ev) => {
      updateBill();
    });
    gst.dataset.listenerAdded = "true";
  }
  getGoldRates();
  addDuplicateDiv();
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map