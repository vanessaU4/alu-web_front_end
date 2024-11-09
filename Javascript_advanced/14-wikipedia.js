function createElement(data) {
    let paragraph = document.createElement('p');
    paragraph.textContent = data;
    document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
    let xhr = new XMLHttpRequest();
    let url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';

    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);
            let pages = response.query.pages;
            let pageId = Object.keys(pages)[0];
            let extract = pages[pageId].extract;
            callback(extract); // Call the callback function with the extract
        } else {
            console.error('Error fetching data from Wikipedia API');
        }
    };

    xhr.onerror = function() {
        console.error('Error fetching data from Wikipedia API');
    };

    xhr.send();
}

// Call queryWikipedia with createElement as callback
queryWikipedia(createElement);