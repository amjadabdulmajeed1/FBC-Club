// Modal
/*
Purpose of the Code:
I used Javascript  to control the visibility of a modal window on a webpage. 

*/

//Step 1 - Variable Declarations:

//Open modal
const modal = document.getElementById('myModal');
//scrollbar
const body = document.getElementById('body');
//slect the first elemnt from HTMLCollection  have class `button-close`. so HTMLCollection index start from zero and [0] because
//we have in the modal one closr button.
//Close, button close and close anywhere outside the modal window.
const span = document.getElementsByClassName('button-close')[0];

//Step 2 - Function to Open the Modal:
function openModal() {
  //It performs two things.
  //Changes the display CSS property of the modal to block, making it visible.
  modal.style.display = 'block';
  //Hides the vertical scrollbar of the body, preventing users from scrolling the background when the modal is open.
  body.style.overflowY = 'hidden';
}

/*
Step 3 - Event Listener for the Close Button:
When the user is clicked on close (x) button >>> then run the function >>> and change display to none (hiding it) >>> and change overflowY to auto (allowing vertical scrolling on the page again).
*/
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
  body.style.overflowY = 'auto';
};

/*
Step 4 - Event Listener for Clicking Outside the Modal:

This event handler is attached to the window object, meaning it listens for any click event anywhere in the window.
So if statement checks if the click event's target (event.target) is the modal itself >>> then change the disolay to none (hiding the modal)
>>> and change overflowY to auto (allowing vertical scrolling on the page again.)
*/

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
    body.style.overflowY = 'auto';
  }
};

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

// Navigation bar
/*
purpose (Main point):
-Enable smooth scrolling for navigation links.
*/

//1. i created function `navigateToItem` with one parameter `item`
function navigateToItem(item) {
  //why use Switch insted of If : A switch is really saying "pick one of these based on this variables value" but an if statement is just a series of boolean checks.
  //2. iused a switch statement to determine the action based on the value of item.
  switch (item) {
    /*
    Step 3 - Case Handling: Check if item is 'home' >>>  then selects the HTML element with the ID 'home' >>>  and  scroll to that element with a smooth scrolling behavior >>  After executing the code inside a case block, the break statement prevents the code from falling through to the next case.
    -This is repeated for each specified section
    */
    case 'home':
      document.getElementById('home').scrollIntoView({
        behavior: 'smooth',
      });
      // borderOver('home');
      // updateNavBar('home');
      break;

    case 'news':
      document.getElementById('news').scrollIntoView({
        behavior: 'smooth',
      });
      // updateNavBar('news');
      // borderOver();
      break;
    case 'results':
      document.getElementById('results').scrollIntoView({
        behavior: 'smooth',
      });
      // updateNavBar('results');
      break;
    case 'about':
      document.getElementById('about').scrollIntoView({
        behavior: 'smooth',
      });
      // updateNavBar('about');
      break;
    case 'gallery':
      document.getElementById('gallery').scrollIntoView({
        behavior: 'smooth',
      });
      // updateNavBar('gallery');
      break;
    case '038nxt':
      document.getElementById('038nxt').scrollIntoView({
        behavior: 'smooth',
      });
      // updateNavBar('038nxt');
      break;
    case 'oosterenk':
      document.getElementById('oosterenk').scrollIntoView({
        behavior: 'smooth',
      });
      // updateNavBar('oosterenk');
      break;
    case 'blauwwit':
      document.getElementById('blauwwit').scrollIntoView({
        behavior: 'smooth',
      });
      // updateNavBar('blauwwit');
      break;
    case 'daltons':
      document.getElementById('daltons').scrollIntoView({
        behavior: 'smooth',
      });
      // updateNavBar('daltons');
      break;
    case 'contact':
      document.getElementById('contact').scrollIntoView({
        behavior: 'smooth',
      });
      // updateNavBar('contact');
      break;
  }
}

// /////////////////////////////////////////
// /////////////////////////////////////////
// /////////////////////////////////////////

// Hamburger

/*
Purpose of the Code
show or hide navigation menu by clicking on Humburger icon
I used JavaScript to allows the user to show or hide the mobile navigation menu by clicking on the hamburger icon.
*/

/*

Step 1 - Self-Executing Anonymous Function:
(function () { // Code inside this block })();

Purpose:
1. To ensure that the code runs immediately after it is defined.
2. to avoid polluting the global namespace.This pattern is used to create a local scope for variables, preventing them from affecting the global scope. This helps avoid conflicts with other code.
*/

(function () {
  /*
Step 2 - Selecting Elements: The code selects the hamburger icon and the mobile navigation menu from the DOM using document.querySelector.
  */
  let hamburger = document.querySelector('.hamburger');
  //used to toggling its visibility when the hamburger icon is clicked.
  let mobileNav = document.querySelector('.mobile-nav');

  /*
Step 3 - Adding Event Listener: An event listener is added to the hamburger icon for the click event.
 */
  hamburger.addEventListener('click', function (event) {
    /*
Step 4 - Event Handling:  Inside the event handler, the event's default action is prevented, and event propagation is stopped.
 */
    // This Prevents the event from bubbling up to parent elements.
    //  the click event on the hamburger icon does not trigger any other click event listeners on parent elements.
    event.stopPropagation();
    //  to prevent any default action associated with the click event on the hamburger icon.
    /*
1.Default Action of a Link:
If the hamburger element is an anchor tag (<a>), clicking on it would by default navigate to the URL specified in its href attribute. Using event.preventDefault(); prevents this .

2.Default Action of a Button:
If the hamburger element is a button within a form, clicking it might submit the form. event.preventDefault(); prevents the form submission
    */
    event.preventDefault();

    // Step 5 - Class List Handling:

    /* 
    Gets the list of classes for the `hamburger` and`mobileNav`  element.
    */
    let classList = hamburger.classList;
    let classListNav = mobileNav.classList;
    let className = 'active';
    /*
    Checks if the hamburger element's class list contains the class "active"
    */
    if (classList.contains(className)) {
      classList.remove(className);
      classListNav.remove(className);
    } else {
      classList.add(className);
      classListNav.add(className);
    }
  });

  //////////////////////////////////////////////
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  // Mobile NAV - Close on click

  /*
Purpose: 
i used javascript to  to close the mobile navigation menu when a user clicks on one of the links in the navigation menu. 
  */

  /*
  Step 1 -Icreate variable `navLink` to selects all elements with the class `.mobile-nav-link` and stores them in the navLinks variable as a NodeList.
  */
  let navLinks = document.querySelectorAll('.mobile-nav-link');

  /*
  Step 2 -  iterate over each element in the `navLinks` NodeList. 
*/
  navLinks.forEach(function (element) {
    /*
 Step 3 - Add Click Event Listener : When the link is clicked, the function inside addEventListener will be executed.
 */
    element.addEventListener('click', function (event) {
      /*
    Step 4 - Stopping Event Propagation :ensures that the click event on a mobile navigation link does not trigger any other event listeners that might be attached to parent elements of the clicked link. 
    */
      event.stopPropagation();

      //Step 5 - Removing the "Active" Class
      //get the class lists of the elements
      let classList = hamburger.classList;
      let classListNav = mobileNav.classList;
      let className = 'active';

      //Remove 'active' Class
      classList.remove(className);
      classListNav.remove(className);
    });
  });
})();

////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

//Slider
/*
Summary
When the "Next" button is clicked:

1.An event triggers the updateSlides function.
2.updateSlides calculates the new slide index and updates the visibility of slides by adding or removing the 'active' class.
3.The CSS transitions ensure the slide change is visually smooth..
*/

/*
Create object slider with two properties:
- id: The ID of the HTML element that contains the slides.
- index:  The index of the currently visible slide (starting from 0 for the first slide).
*/
let slider = { id: 'slider', index: 0 };

/*
create function with two prameters to handles the changing slides
*/
function updateSlides(index, object) {
  // Get the slider container by ID
  const slides = document.getElementById(object.id);
  // Current index of the visible slide. (oldIndex = 2 -->   current slide is 3).
  const oldIndex = object.index;
  /*
Calls the getNewIndex function, passing three parameters:
- index: Determines Move slide (index = 1 -->  move forward, index = -1   backward).
- slides.children.length - 1:  to get last slides (If there are 5 slides, this value will be 4).
  */
  //Calculate the new index based on the current index and direction.
  const newIndex = getNewIndex(oldIndex, index, slides.children.length - 1);

  //calculate the new index of the slide to be shown next.
  //This line adds the updateIndex (either 1 or -1) to the current index (oldIndex), resulting in a new potential index (newIndex).
  function getNewIndex(oldIndex, updateIndex, slidesLength) {
    if (oldIndex + updateIndex > slidesLength) return 0; //If the new index exceeds the length, wrap to the first slide
    if (oldIndex + updateIndex < 0) return slidesLength; //If the new index is less than 0, wrap to the last slide
    return oldIndex + updateIndex; // Otherwise, return the new index
  }

  /*
Responsible for updating the visible slide in a slider :

-slides : refers to the HTML element containing all the slides.
- slides.children : gives you a collection of the slide elements (as HTMLCollection).
- slides.children[oldIndex] selects the specific slide that is currently active.
- .classList.remove('active') removes the 'active' class from this slide. The 'active' class is usually used in CSS to style the active slide (e.g., to make it visible or highlighted).

  */

  // Update the slide visibility
  //Removes the 'active' class from the old slide, hiding it.
  slides.children[oldIndex].classList.remove('active');
  // Adds the 'active' class to the new slide, making it visible.
  slides.children[newIndex].classList.add('active');
  //Updates the current index to the new slide index.
  object.index = newIndex;
}

// Gallery
/*
Only one image (panel) can be highlighted at a time.
the main point is active class.by adding or remove `Active` class
*/
//1.Select All  Images (Panels): returns a NodeList of all matching elements.
const panels = document.querySelectorAll('.gallery-panel');

//2.Add Event Listeners to Each image(Panel)
//panels.forEach iterates through each image(panel) in the NodeList.
panels.forEach((panel) => {
  console.log(panel);
  //sets up a function to be called when the panel is clicked.
  panel.addEventListener('click', () => {
    //call removeActiveClasses function
    removeActiveClasses();

    //adds the active class to the clicked panel, which will visually highlight it.
    panel.classList.add('active');
  });
});

//Function to Remove active Class from All images(Panels)
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}

// 11111111111111111111111
// 11111111111111111111111
// 11111111111111111111111
