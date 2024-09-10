// Function to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggleMode = () => {
  const body = document.body;
  const currentMode = localStorage.getItem('mode') || 'light';

  if (currentMode === 'light') {
    body.classList.add('dark');
    document.documentElement.style.setProperty('--circle-color', '#333'); // Update the circle color for dark mode
    localStorage.setItem('mode', 'dark');
  } else {
    body.classList.remove('dark');
    document.documentElement.style.setProperty('--circle-color', '#ffb100'); // Reset the circle color for light mode
    localStorage.setItem('mode', 'light');
  }
};

const toggleButton = document.getElementById('toggle');
if (toggleButton) {
  toggleButton.addEventListener('click', toggleMode);
}

// Function to read data from local storage. Returns an empty array if no data exists.
const readLocalStorage = () => {
  const data = localStorage.getItem('blogData');
  return data ? JSON.parse(data) : [];
};

// Function to store new blog data in local storage.
const storeLocalStorage = (newData) => {
  const existingData = readLocalStorage();
  existingData.push(newData);
  localStorage.setItem('blogData', JSON.stringify(existingData));
};

// Function to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};


// // TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
// const toggleMode = () => {
//   const body = document.body;
//   const circle = document.querySelector('aside');
//   const currentMode = localStorage.getItem('mode') || 'light';

//   if (currentMode === 'light') {
//     body.classList.add('dark');
//     circle.classList.add('dark-circle');
//     localStorage.setItem('mode', 'dark');
//   } else {
//     body.classList.remove('dark');
//     circle.classList.remove('dark-circle');
//     localStorage.setItem('mode', 'light');
//   }
// };

// // Call toggleMode on page load to apply the saved mode
// document.addEventListener('DOMContentLoaded', () => {
//   const savedMode = localStorage.getItem('mode') || 'light';
//   if (savedMode === 'dark') {
//     document.body.classList.add('dark');
//     document.querySelector('aside').classList.add('dark-circle');
//   }
// });

// // Event listener for the toggle button
// const toggleButton = document.getElementById('toggle');
// if (toggleButton) {
//   toggleButton.addEventListener('click', toggleMode);
// }

// // TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
// const readLocalStorage = () => {
//   const data = localStorage.getItem('blogData');
//   return data ? JSON.parse(data) : [];
// };

// // TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
// const storeLocalStorage = (newData) => {
//   const existingData = readLocalStorage();
//   existingData.push(newData);
//   localStorage.setItem('blogData', JSON.stringify(existingData));
// };

// // ! Use the following function whenever you need to redirect to a different page

// let redirectURL = '';

// const redirectPage = function (url) {
//   redirectURL = url;
//   location.assign(url);
// };

