
import { fetchData, createData, updateData, modifyData } from './apiModul.mjs';

// Function to get new dog image
async function getNewDog() {
    const dog = document.getElementById('dog');
    dog.style.cursor = 'wait';

    try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        if (response.status === 200) {
            const jsonData = await response.json();
            dog.src = jsonData.message;
        } else {
            console.error("Error fetching new dog image.");
        }
    } catch (error) {
        console.error("Request failed.", error);
    } finally {
        dog.style.cursor = 'pointer';
    }
}

// Function to fetch user data
async function getUserData() {
    const url = 'https://jsonplaceholder.typicode.com/todos';

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (response.status === 200) {
            console.log('Success', data);
        } else {
            console.log('Server Error', data.error.message);
        }
    } catch (error) {
        console.log('Fetch Error', error);
    }
}

// Setup event listeners
export function setupEventListeners() {
    const dog = document.getElementById('dog');
    dog.addEventListener("click", getNewDog);
    getNewDog(); // Initial fetch

    const btnEl = document.querySelector('.button');
    btnEl.addEventListener('click', getUserData);
}