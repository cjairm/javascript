// get fetch button
const fetchBtn = document.getElementById('fetch-photos');
// get select where the items per page is stored
var itemsPerPage = document.getElementById("select-items-of-page");

// get size of images from radio inputs
const getSize = () => {
    return [].slice.call(document.querySelectorAll('.form-check-input[name="size"]')).find(input => {
        return input.checked === true;
    });
};

// this is executed where user clicks the button for fetching photos
const getNewPhotos = () => {
    btnLoading();
    fetchPhotos();
};

// Change style of button while sending request to API
const btnLoading = () => {
    const spanCreate = document.createElement('span');
    spanCreate.classList.add("spinner-grow", "spinner-grow-sm");
    spanCreate.role = "status";
    spanCreate.ariaHidden = "true";
    fetchBtn.textContent = "Loading...";
    fetchBtn.disabled = true;
    fetchBtn.prepend(spanCreate);
};

// change style of button after sent requeest to API
const btnFinishedTask = () => {
    fetchBtn.innerHTML = "";
    fetchBtn.disabled = false;
    fetchBtn.textContent = "Get Photos";
};

// Helper to send request to server as Promise
const sendHttpRequest = (method, url) => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);   
            } else {
                reject(new Error('Something went wrong!'));
            }
        };
        xhr.onerror = function() {
            reject(new Error('Server not reached!'));
        }
        xhr.send();
    });

    return promise;
};

// Fetch photos as async function to await for sendHttpRequest response.
const fetchPhotos = () => {
    const pageItems = itemsPerPage.options[itemsPerPage.selectedIndex].value;
    
    sendHttpRequest(
        'GET',
        `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=0d0e78cd535935555246f4175fd8b375&per_page=${pageItems}&format=json&nojsoncallback=1`
    ).then(response => {
        const createImage = new Images(response.photos.photo, getSize().value, 'photos');
        createImage.insertToDOM();
        btnFinishedTask();
    }).catch(response => {
        const alert = document.querySelector(".alert-danger");
        alert.textContent = response.message;
        alert.classList.remove('d-none');
        setTimeout(() => {
            alert.classList.add('d-none');
        }, 6000);
        btnFinishedTask();
    });
}

// adding event to the button
fetchBtn.addEventListener('click', getNewPhotos);
