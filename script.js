//

// const navbar = document.getElementById('nav');

// window.onscroll = function () {
//   if (window.pageYOffset > 100) {
//     navbar.classList.remove('top');
//   } else {
//     navbar.classList.add('top');
//   }
// };

// 1111111111111
// 1111111111111
// 1111111111111

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const navbar = document.getElementById('nav');
window.onscroll = () => {
  //add effect to navbar, it's the nav bar is transparent but when user scroll down get the background of navbar.
  if (window.pageYOffset > 100) {
    navbar.classList.remove('top');
  } else {
    navbar.classList.add('top');
  }
  //Active navigation links on scroll
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });
};
