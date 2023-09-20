import { isLoggedIn } from "../../helpers/storage/index.js";

function createListings(listing) {
    const div = document.createElement("div");
    div.classList.add("card");

    const title = document.createElement("span");
    title.innerHTML = `<strong>${listing.title}</strong>`;
    div.append(title);

    const image = document.createElement("img");
    image.src = listing.media[0] ?? "https://picsum.photos/200";
    image.alt = listing.title;
    div.append(image);

    const description = document.createElement("span");
    description.innerText = listing.description;
    div.append(description);

    const endsAt = document.createElement("span");
    endsAt.innerHTML = `<strong>Ends at:</strong> ${listing.endsAt}`;
    div.append(endsAt);

    if (isLoggedIn() === true) {
        const bids = document.createElement("span");
        bids.innerHTML = `<strong>Current bids:</strong> ${listing._count.bids}`;
        div.append(bids);

        const bidButton = document.createElement("button");
        bidButton.classList.add("btn");
        bidButton.classList.add("btn-outline-primary");
        bidButton.classList.add("mb-2");
        bidButton.innerText = "Place bid";
        div.append(bidButton);
    }
    
    return div;
}

export default function renderListings(listings) {
    const listingsContainer = document.querySelector("#listingsContainer");
    listingsContainer.innerHTML = "";
    const listingsHtml = listings.map((listing) => createListings(listing));
    listingsContainer.append(...listingsHtml);
}
