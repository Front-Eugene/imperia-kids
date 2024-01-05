const navigation = document.querySelector(".navigation");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener('click', function () {
  navigation.classList.toggle("nav-active");
});

console.log(navigation)
console.log(menuBtn)