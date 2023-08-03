import navbar from "../templates/navbar.js";
import footer from "../templates/footer.js";
import mobileMenuInner from "../templates/mobileMenu.js";

// Wait for everything to load before selecting elements (otherwise script may run before elements are loaded)
window.onload = () => {
  // Insert navbar contents from template into <nav> tag
  document.querySelector("nav").innerHTML = navbar;

  // Insert mobile menu after navbar
  const mobileMenu = document.createElement("div");
  mobileMenu.setAttribute("id", "mobile-menu");
  mobileMenu.classList.add("hide-menu");
  mobileMenu.innerHTML = mobileMenuInner;
  document.querySelector("nav").after(mobileMenu);

  // Insert footer contents from teomplate into <footer> tag
  document.querySelector("footer").innerHTML = footer;

  const hamburger = document.querySelector("#hamburger");

  hamburger.addEventListener("click", (e) => {
    const mobileLinks = document.querySelectorAll(".mobile-menu-link");
    e.target.classList.toggle("flip-burger");
    document.querySelector("#mobile-menu").classList.toggle("hide-menu");
    mobileLinks.forEach((link) => (link.style.display = "block"));
  });

  document.querySelector("#contact-link").addEventListener("click", (e) => {
    e.preventDefault();

    document.querySelector("footer").scrollIntoView({ behavior: "smooth" });
  });

  document
    .querySelector("#mobile-contact-link")
    .addEventListener("click", (e) => {
      e.preventDefault();

      hamburger.classList.toggle("flip-burger");

      document.querySelector("#mobile-menu").classList.toggle("hide-menu");

      document
        .querySelectorAll(".mobile-menu-link")
        .forEach((link) => (link.style.display = "none"));

      document.querySelector("footer").scrollIntoView({ behavior: "smooth" });
    });

  // document.addEventListener('click', e => {
  //     if (e.target.id == 'hamburger' || e.target.classList.contains('hamburger-slice')) {
  //         document.querySelector('#hamburger').classList.add('flip-burger');

  //         document.querySelectorAll('.mobile-menu-link').forEach(link => {
  //             link.style.display = 'block';
  //         })

  //         document.querySelector('#mobile-menu').classList.remove('hide-menu');

  //     } else if (e.target.id == "mobile-contact-link") {
  //         e.preventDefault();

  //         document.querySelector('#mobile-menu').classList.add('hide-menu');

  //         document.querySelector('#hamburger').classList.add('flip-burger');

  //         document.querySelectorAll('.mobile-menu-link').forEach(link => {
  //             link.style.display = 'none';
  //         });

  //         document.querySelector('#hamburger').classList.remove('flip-burger');

  //         document.querySelector('footer').scrollIntoView({behavior: 'smooth'});
  //     }
  // })

  // const mobileMenuLoaded = document.querySelector('#mobile-menu')

  // document.addEventListener('click', e => {
  //     if (e.target.id == 'hamburger') {
  //         mobileMenuLoaded.style.display = 'flex';
  //     }
  // })

  // const observer = new MutationObserver(function() {
  //     if (mobileMenuLoaded.style.display != 'none') {
  //         console.log('sdfs');
  //         mobileMenuLoaded.style.opacity = '0.9';
  //     }
  // });

  // observer.observe(mobileMenuLoaded, { attributes: true, childList: true });
  
};

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}