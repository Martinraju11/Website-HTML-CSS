var owl = $(".autoplay");
owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});
var menu = document.getElementById("menu");
var pan = document.getElementById("pan");
menu.addEventListener("click", function () {
  pan.style.visibility = "visible";
  pan.classList.add("pl");
});
var close = document.getElementById("cl");
close.addEventListener("click", function () {
  pan.style.visibility = "hidden";
  pan.classList.remove("pl");
});
var btns = document.querySelectorAll(".side-1");
console.log(btns);
btns.forEach((element) => {
  element.addEventListener("click", function () {
    pan.style.visibility = "hidden";
  });
});
