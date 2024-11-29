document.getElementById('SignUpbtn').addEventListener('click', (e)=> {
  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value

  if(email === '' || pass === ''){
    e.preventDefault();
    document.getElementById('error-msg').classList.remove('d-none');
  }
  else{
    document.getElementById('error-msg').classList.add('d-none');
    alert("Form submitted successfully");
  }
})

// sidebar
let counter = 0;


document.querySelector(".fa-bars").addEventListener("click", ()=> {
  let side_bar = document.querySelector(".flex-shrink-0");
  if (counter === 0){
            side_bar.style.display = "block";
            side_bar.style.pointer = "cursor";
            counter = 1;
  }
  else{
      side_bar.style.display = "none";
    counter = 0;
    
  }
console.log (counter)
})