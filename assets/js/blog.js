// TODO: Create a variable that selects the main element, and a variable that selects the back button element

// TODO: Create a function that builds an element and appends it to the DOM

// TODO: Create a function that handles the case where there are no blog posts to display

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

// TODO: Call the `renderBlogList` function

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked



const mainElement = document.querySelector('main');
const backButton = document.getElementById('back');

// Append an element to the DOM
const createBlogPostElement = (post) => {
  const article = document.createElement('article');
  article.classList.add('card');

  const title = document.createElement('h2');
  title.textContent = post.title;
  article.appendChild(title);

  const content = document.createElement('blockquote');
  content.textContent = post.content;
  article.appendChild(content);

  const author = document.createElement('p');
  author.textContent = `By ${post.author}`;
  article.appendChild(author);

  mainElement.appendChild(article);
};

// No blog posts case
const handleNoPosts = () => {
  const message = document.createElement('p');
  message.textContent = "No Blog posts yet...";
  mainElement.appendChild(message);
};

// Render the list of blog posts
const renderBlogList = () => {
  const blogPosts = readLocalStorage();

  if (blogPosts.length === 0) {
    handleNoPosts();
  } else {
    blogPosts.forEach(post => createBlogPostElement(post));
  }
};

document.addEventListener('DOMContentLoaded', renderBlogList);

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backButton.addEventListener('click', () => {
  redirectPage('index.html');
});