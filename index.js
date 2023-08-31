var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    // for color
    for (tablink of tablinks) {
        tablink.classList.remove("active-links");
    }
    // for data
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    // for color
    event.currentTarget.classList.add("active-links");
    // for data
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemen = document.getElementById("sidemenu");
function openmenu() {
    sidemen.style.right = "0";
}
function closemenu() {
    sidemen.style.right = "-200px";
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbwCBJ1tkqHKPwrczOve3ynrLIjYGpjFwynuw5tmWWJ448M8yfebRgZFxPpyJl9_04Vq/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg")
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML="Message sent Successfully"
            setTimeout(function(){
                msg.innerHTML=""
            },3000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
