let dropdownArea = document.querySelector("#dropdown-menu");
let dropdownOptions = document.querySelectorAll(".dropdown-option");
let dropdownToggle = document.querySelector("#dropdown-toggle");
let dropdownToggleSimbol = document.querySelector("#dropdown-toggle>span");

dropdownToggle.onclick = () => {
  dropdownOptions.forEach((option) => {
    if (option.classList.contains("option-hidden")) {
      option.classList.remove("option-hidden");
      option.classList.add("option-visible");

      dropdownToggleSimbol.innerHTML = "keyboard_arrow_up";

      dropdownArea.style.height = "18rem";
    } else {
      option.classList.remove("option-visible");
      option.classList.add("option-hidden");

      dropdownToggleSimbol.innerHTML = "keyboard_arrow_down";

      dropdownArea.style.height = "3rem";
    }
  });
};


let carouselContent = document.getElementById('carousel-images')
let carouselImageContainers = document.querySelectorAll('.carousel-image-container')
let index = 0;

let carouselOptionLeft = document.getElementById('carousel-option-left')
let carouselOptionRight = document.getElementById('carousel-option-right')

function showSlide(index){
  carouselContent.style.transform = `translateX(-${index*100}%)`
}

carouselOptionLeft.onclick = ()=>{
  index--
  showSlide(index)
}

carouselOptionRight.onclick = ()=>{
  index++
  showSlide(index)
}

