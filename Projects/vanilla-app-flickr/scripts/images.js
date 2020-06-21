// Class to print all images fetched from server.
class Images {
    // Class receive the response from server, the element where the images are going to be inserted, and the size selected
    constructor(data, size, elToInsert) {
        this.data = data;
        this.ele = elToInsert;
        this.size = size;
    }

    // Function to convert the data fetched from server to a new one with URL
    convertJson() {
        return this.data.map(photo => {
            const url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${this.size}.jpg`;
            const newPhoto = {
                ...photo,
                url
            };
            return newPhoto;
        });
    }

    // Function to insert all photos in the DOM.
    insertToDOM() {
        // Clear container of photos
        document.getElementById(this.ele).innerHTML = "";

        // Iterate each photo fetched from server
        this.convertJson().map(photo => {
            // create a container of each photo
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('my-2');

            // create the image of each photo
            const img = document.createElement('img');
            img.classList.add("img-fluid");
            img.src = photo.url;
            img.alt = `Responsive image ${photo.id}`;

            // create text for each photo
            const cardBody = document.createElement('div');
            cardBody.classList.add("card-body");

            const title = document.createElement('h5');
            title.classList.add("card-title");
            title.textContent = photo.id;

            // Append all info to cardDiv container
            cardBody.appendChild(title);
            cardDiv.appendChild(img);
            cardDiv.appendChild(cardBody);

            // Append full design of photo to the container
            document.getElementById(this.ele).appendChild(cardDiv);
        });
    }
}