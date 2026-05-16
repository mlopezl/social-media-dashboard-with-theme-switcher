const toggle = document.getElementById('toggle');
const body = document.body;


toggle.addEventListener('change', () =>{
    if(toggle.checked){
    body.classList.remove('dark');
} else{
    body.classList.add('dark');
}
})

