# SBA-308A
Here is a `README.md` file for the project:

# API Interaction Example

This project demonstrates how to interact with different APIs using JavaScript. It includes functions for making GET, POST, PUT, and PATCH requests, and handles user interactions to fetch and display data from external APIs.

## Project Structure

```
.
├── api.js
├── interaction.js
├── main.js
└── index.html
```

### `api.js`
This module contains functions for data manipulation via API requests using `fetch`. It includes:
- `fetchData(endpoint)`: Performs a GET request to fetch data from a given endpoint.
- `createData(endpoint, payload)`: Performs a POST request to create new data.
- `updateData(endpoint, payload)`: Performs a PUT request to update existing data.
- `modifyData(endpoint, payload)`: Performs a PATCH request to modify existing data.

### `interaction.js`
This module handles user interactions and event listeners. It includes:
- `getNewDog()`: Fetches a random dog image from the Dog CEO API and updates the image displayed.
- `getUserData()`: Fetches user data from the JSONPlaceholder API.
- `setupEventListeners()`: Sets up event listeners for user interactions.

### `main.js`
This is the main module that demonstrates the usage of the functions from `api.js` and `interaction.js`. It includes:
- Example usage of `fetchData`, `createData`, `updateData`, and `modifyData`.
- Setup of event listeners for fetching a new dog image and getting user data.

## Usage

### Prerequisites

Ensure you have a modern browser that supports ES6 modules.

### Instructions

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd <project-directory>
   ```
3. Open `index.html` in your browser.

### 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API Interaction Example</title>
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

### Description

- **Dog Image**: Click on the dog image to fetch and display a new random dog image.
- **Cat Breeds**: Fetches and displays a list of cat breeds.
- **Get User Data Button**: Fetches and logs user data from the JSONPlaceholder API when clicked.

### Note

Make sure to replace `<repository-url>` and `<project-directory>` with the actual repository URL and project directory name.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to modify and enhance this project as needed! If you have any questions or issues, please open an issue on the repository.

