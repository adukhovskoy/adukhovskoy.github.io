var callModalHotelSearch = document.querySelector(".button-call-modal-hotel-search");
var modalHotelSearch = document.querySelector(".modal-hotel-search");
var incrementAdultAge = document.querySelector("label.adult-count-label ~ button.increment-age");
var decrementAdultAge = document.querySelector("label.adult-count-label ~ button.decrement-age");
var incrementChildrenAge = document.querySelector("label.children-count-label ~ .button.increment-age");
var decrementChildrenAge = document.querySelector("label.children-count-label ~ .button.decrement-age");
var adultAge = document.querySelector("label.adult-count-label ~ input");
var childrenAge = document.querySelector("label.children-count-label ~ input");

callModalHotelSearch.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalHotelSearch.classList.toggle("modal-hidden");
  modalHotelSearch.classList.toggle("modal-visible");
});
incrementAdultAge.addEventListener("click", function(evt) {
  try {
    adultAge.stepUp(1);
  } catch(err) {
    adultAge.value = Number(adultAge.value) + 1;
  }
});
decrementAdultAge.addEventListener("click", function(evt) {
  try {
    adultAge.stepDown(1);
  } catch(err) {
    adultAge.value = Number(adultAge.value) + 1;
  }
});
incrementChildrenAge.addEventListener("click", function(evt) {
  try {
    childrenAge.stepUp(1);
  } catch(err) {
    childrenAge.value = Number(childrenAge.value) + 1;
  }
});
decrementChildrenAge.addEventListener("click", function(evt) {
  try {
    childrenAge.stepDown(1);
  } catch(err) {
    childrenAge.value = Number(childrenAge.value) + 1;
  }
});
