const body = document.body;
const toggleButton = document.getElementById('toggleButton')
const circle = document.querySelector('.circle')

const darkMode = () => {
    body.classList.toggle('darkMode');
    circle.classList.toggle('night');
}

toggleButton.addEventListener('click', darkMode);










// const toggleColorMode = e => {
//     // Switch to Light Mode
//     if (e.currentTarget.classList.contains("light--hidden")) {
//         // Sets the custom HTML attribute
//         document.documentElement.setAttribute("color-mode", "light");

//         // Sets the user's preference in local storage
//         localStorage.setItem("color-mode", "light");
//         return;
//     }
    
//     // Switch to Dark Mode
//     // Sets the custom HTML attribute
//     document.documentElement.setAttribute("color-mode", "dark");

//     // Sets the user's preference in local storage
//     localStorage.setItem("color-mode", "dark");
// };

// // Get the buttons in the DOM
// const toggleColorButtons = document.querySelectorAll(".toggle-checkbox");

// // Set up event listeners
// toggleColorButtons.forEach(btn => {
//     btn.addEventListener("change", toggleColorMode);
// });

// // This code assumes a Light Mode default
// if (
//     // This condition checks whether the user has set a site preference for dark mode OR a OS-level preference for Dark Mode AND no site preference
//     localStorage.getItem('color-mode') === 'dark' ||
//     (window.matchMedia('(prefers-color-scheme: dark)').matches &&
//      !localStorage.getItem('color-mode'))
// ) {
//     // if true, set the site to Dark Mode
//     document.documentElement.setAttribute('color-mode', 'dark');
// }
