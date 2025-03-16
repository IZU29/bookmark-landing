const acc = document.getElementsByClassName("box");
const logo = document.getElementById("logo")
const navLogo = document.getElementById("nav-logo")
const openNav = document.getElementById("open-nav")
const closeNav = document.getElementById("close-nav")
const nav = document.getElementById("nav")
// logo
// nav-logo
// open-nav
// close-nav
openNav.addEventListener('click' , () =>{
  console.log('Werey')
  openNav.classList = 'no--nav'
  closeNav.classList = 'display'
  logo.classList = 'no--nav'
  navLogo.classList = 'display'
  nav.classList = 'nav--bar'
})
closeNav.addEventListener('click' , () =>{
  console.log('Werey')
  closeNav.classList = 'no--nav'
  openNav.classList = 'display'
  logo.classList = 'display'
  navLogo.classList = 'no--nav'
  nav.classList = 'no--bg'
})
let i;
console.log(acc)
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    // this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
    console.log(acc)
  });

}