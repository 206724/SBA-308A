# SBA-308A
Here is a `README.md` file for the project:

# API Interaction

This project demonstrates how to interact with different APIs using JavaScript. It includes functions for making GET, POST, PUT, and PATCH requests and handles user interactions to fetch and display data from external APIs.

## Project Structure

```
.
├── css
│   └── styles.css
├── mjs
│   ├── apiModule.mjs
│   ├── interaction.mjs
│   └── main.mjs
└── index.html

```

### `apiModule.mjs`
This module contains functions for data manipulation via API requests using `fetch`. It includes:
- `fetchData(endpoint)`: Performs a GET request to fetch data from a given endpoint.
- `createData(endpoint, payload)`: Performs a POST request to create new data.
- `updateData(endpoint, payload)`: Performs a PUT request to update existing data.
- `modifyData(endpoint, payload)`: Performs a PATCH request to modify existing data.

### `interaction.mjs`
This module handles user interactions and event listeners. It includes:
- `getNewDog()`: Fetches a random dog image from the Dog CEO API and updates the image displayed.
- `getUserData()`: Fetches user data from the JSONPlaceholder API.
- `setupEventListeners()`: Sets up event listeners for user interactions.

### `main.js`
This is the main module that demonstrates the usage of the functions from `apiModule.mjs` and `interaction.mjs`. It includes:
- Example usage of `fetchData`, `createData`, `updateData`, and `modifyData`.
- Setup of event listeners for fetching a new dog image and getting user data.
### `index`
- **HTML (index.html)**: Sets up the structure of the landing page with sections for a dog image, cat breeds list, and user data button.

###`CSS(style.css)`  
-  Provides styling for the page, including layout, colors, and button styles.

## Usage

### Prerequisites

Ensure you have a modern browser that supports ES6 modules.

### Instructions

1. Clone the repository:
   ```sh
   git clone 'https://github.com/206724/SBA-308A.git'
   ```
2. Navigate to the project directory:
   ```sh
   cd </d/Per Scholas C lass/JavaScript/JavaScript Code/Lesson 308A/Lesson 308A.4 - AJAX and Data Fetching/Project 308A>
   ```
3. Open `index.html` in your browser.

### index.html

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API Interaction</title>
</head>
<body>
    <h1>Dog Image</h1>
    <img id="dog" src="" height="250" style="cursor: pointer;" />
    <h1>Cat Breeds</h1>
    <ul id="breedsList"></ul>
    <button class="button">Get User Data</button>
    <script type="module" src="main.js"></script>
</body>
</html>
```
###CSS(style.css)

### Description

- **Dog Image**: Click on the dog image to fetch and display a new random dog image.
- **Cat Breeds**: Fetches and displays a list of cat breeds.
- **Get User Data Button**: Fetches and logs user data from the JSONPlaceholder API when clicked.

### Note









