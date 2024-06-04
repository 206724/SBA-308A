const apiKey = 'x-api-key';

// Function to fetch data (GET request)
export async function fetchData(endpoint) {
    const response = await fetch(`https://api.thecatapi.com/v1/${endpoint}`, {
        headers: {
            'x-api-key': apiKey
        }
    });
    const data = await response.json();
    return data;
}

// Function to create data (POST request)
export async function createData(endpoint, payload) {
    const response = await fetch(`https://reqres.in/api/users/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey
        },
        body: JSON.stringify(payload)
    });
    const data = await response.json();
    return data;
}

// Function to update data (PUT request)
export async function updateData(endpoint, payload) {
    const response = await fetch(`https://reqres.in/api/users/${endpoint}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey
        },
        body: JSON.stringify(payload)
    });
    const data = await response.json();
    return data;
}

// Function to modify data (PATCH request)
export async function modifyData(endpoint, payload) {
    const response = await fetch(`https://reqres.in/api/users/${endpoint}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey
        },
        body: JSON.stringify(payload)
    });
    const data = await response.json();
    return data;
}