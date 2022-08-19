const API = 'https://api.escuelajs.co/api/v1';


function fetchPost(url, data) {
    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

 let name = 'John Doe';

const data = {
    "title": name,
    "price": 99999320,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}

fetchPost(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data))