/**
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
*/

// Global Variables 

const pageSections = document.querySelectorAll("section");
const navbar = document.getElementById("navbar__list");
const navbarLi = document.querySelectorAll("li");

// Build Nav

for (let i = 0; i < pageSections.length; i++) {
    const newLi = document.createElement("li");
    const sections = document.getElementsByTagName("section");
    newLi.innerHTML = `<a href="#${sections[i].id}">${sections[i].id}</a>`;
    navbar.appendChild(newLi);
};

// Add class 'active' to section when near top of viewport

for (let i = 0; i < pageSections.length; i++) {
    function inViewport(pageSections) {
        let bounding = pageSections.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    window.addEventListener("scroll", function(event) {
        if (inViewport(pageSections)) {
            pageSections.classList.add("active");
        } else {
            pageSections.classList.remove("active");
        }
    });
};


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active