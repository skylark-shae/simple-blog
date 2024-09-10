// Form submission handler
function handleFormSubmission(event) {
  event.preventDefault();

  // Retrieve form data
  const username = document.getElementById('username').value;
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  const errorElement = document.getElementById('error');

  // Check for empty fields and display error message if any field is empty
  if (!username || !title || !content) {
    errorElement.textContent = 'Please complete the form.';
    return;
  }

  // Prepare blog data object
  const blogData = {
    username: username,
    title: title,
    content: content,
  };

  // Store blog data in local storage
  storeLocalStorage(blogData);

  // Redirect to the blog page after successful submission
  redirectPage('blog.html');
}

// Add event listener to the form
const form = document.querySelector('form');
form.addEventListener('submit', handleFormSubmission);
