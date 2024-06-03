let dropdownArea = document.querySelector('#dropdown-content')
let dropdownOptions = document.querySelectorAll('.dropdown-option')
let dropdownToggle = document.querySelector('#dropdown-toggle')

dropdownToggle.onclick = () => {



   dropdownOptions.forEach((option) =>{

    if (option.style.display == 'inline'){
        option.style.display = 'none';
    } else {
        option.style.display = 'inline';
    }
    
   })

   
   
}