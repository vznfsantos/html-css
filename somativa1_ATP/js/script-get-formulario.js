fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Converte a resposta em JSON
    })
    .then(data => console.log(data)) // Manipula os dados recebidos
    .catch(error => console.error('There has been a problem with your fetch operation:', error));