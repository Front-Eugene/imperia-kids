const navigation = document.querySelector(".navigation"),
      menuBtn = document.querySelector(".menu-btn"),
      body = document.querySelector("#body");


menuBtn.addEventListener('click', function () {
  navigation.classList.toggle("nav-active");
  body.classList.toggle("no-scroll");
});