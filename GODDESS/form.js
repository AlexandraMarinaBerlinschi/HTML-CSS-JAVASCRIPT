function myFunction() {
  document.getElementById("Dropdown_id").classList.toggle("show");
}

function filtruFunction() {
  var input, filtru, div, a, i;
  input = document.getElementById("Search");
  filtru = input.value.toUpperCase();
  div = document.getElementById("Dropdown_id");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filtru) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function RemoveFunction() {
  document.getElementById("Search").value = "";
}

const input = document.getElementById('email');
input.addEventListener('input', handleInputChange);
const EmailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function handleInputChange(event) {
  const text = event.target.value;
  const isValidEmail = EmailRegex.test(text);
  if (isValidEmail) {
    console.log('Email-ul este valid');
  } else {
    console.log('Email-ul este invalid');
  }
}

const input_nr = document.getElementById('nr_tel');
input_nr.addEventListener('input', handleInput_nrChange);
const phoneNumberRegex = /[0-9]{10,10}$/;
function handleInput_nrChange(event) {
  const text = event.target.value;
  const isValidPhoneNumber = phoneNumberRegex.test(text);
  
  if (isValidPhoneNumber) {
    console.log('Numarul de telefon este valid');
  } else {
    console.log('Numarul de telefon este invalid');
  }
}


const input_nume = document.getElementById('nume');
input_nume.addEventListener('input', handleInput_numeChange);
const NumeRegex = /[A-Za-z]{3,100}$/;
function handleInput_numeChange(event) {
  const text = event.target.value;
  const isValidNume = NumeRegex.test(text);
  
  if (isValidNume) {
    console.log('Numele este valid');
  } else {
    console.log('Numele este invalid');
  }
}

const checkboxInput = document.getElementById('checkboxInput');
function handleCheckboxChange(event) {
  const isChecked = event.target.checked;
  if (isChecked) {
    console.log('Prima caseta de selectare activata');
  } else {
    console.log('Prima caseta de selectare dezactivata');
  }
}
checkboxInput.addEventListener('change', handleCheckboxChange);

const checkboxInput2 = document.getElementById('checkboxInput2');
function handleCheckboxChange2(event) {
  const isChecked2 = event.target.checked;
  if (isChecked2) {
    console.log('A doua caseta de selectare activata');
  } else {
    console.log('A doua caseta de selectare dezactivata');
  }
}
checkboxInput2.addEventListener('change', handleCheckboxChange2);

const checkboxInput3 = document.getElementById('checkboxInput3');
function handleCheckboxChange3(event) {
  const isChecked3 = event.target.checked;
  if (isChecked3) {
    console.log('A treia caseta de selectare activata');
  } else {
    console.log('A treia caseta selectare dezactivata');
  }
}
checkboxInput3.addEventListener('change', handleCheckboxChange3);

const selectInput = document.getElementById('categorie');
selectInput.addEventListener('change', function() {
  const selectedValue = selectInput.value;
  if (selectedValue) {
    console.log('Categorie selectata: ' + selectedValue);
  } else {
    console.log('Nu a fost selectata o categorie');
  }
});