var linkMap = document.querySelector(".link-map");
var aboutUsLink = document.querySelector(".about-us-link")
var popupMap = document.querySelector(".map-modal");
var popupFeedback = document.querySelector(".feedback-modal");
var closeMap = document.querySelector(".map-modal .close-btn");
var closeAboutUs = document.querySelector(".feedback-modal .close-btn");

linkMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");
});

closeMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-show");
});

aboutUsLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupFeedback.classList.add("modal-show");
});

closeAboutUs.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupFeedback.classList.remove("modal-show");
});



