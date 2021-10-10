
let header = document.querySelector(".logo_nav");
let mybutton = document.querySelector("#myBtn");


window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
    && document.body.scrollTop > 30 ||
    document.documentElement.scrollTop > 30
  ) {
    header.classList.add("top");
    mybutton.style.display = "block";
  } else {
    header.classList.remove("top");
    mybutton.style.display = "none";
  }
};

mybutton.addEventListener("click", (e)=>{
  e.preventDefault();
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
)


function myFunction() {
  document.querySelectorAll(".navBar")[0].classList.toggle("responsive");
}


