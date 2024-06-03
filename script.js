let dropdownArea = document.querySelector("#dropdown-menu");
let dropdownOptions = document.querySelectorAll(".dropdown-option");
let dropdownToggle = document.querySelector("#dropdown-toggle");

dropdownToggle.onclick = () => {
  dropdownOptions.forEach((option) => {
    if (option.style.display == "inline") {
      option.style.display = "none";
      dropdownArea.style.height = '3rem'
    } else {
      option.style.display = "inline";
      dropdownArea.style.height = '18rem'
    }
  });
};
