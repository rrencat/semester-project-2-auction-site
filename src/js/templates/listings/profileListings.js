function creatProfileListings(profileListing) {
    const div = document.createElement("div");
    div.classList.add("card");

    const span = document.createElement("span");
    span.innerText = profileListing.title;
    div.append(span);

    const image = document.createElement("img");
    image.src = profileListing.media[0] ?? "https://picsum.photos/200";
    image.alt = profileListing.title;
    div.append(image);

    const description = document.createElement("span");
    description.innerText = profileListing.description;
    div.append(description);

    const endsAt = document.createElement("span");
    endsAt.innerText = profileListing.endsAt;
    div.append(endsAt);

    
    const bids = document.createElement("span");
    bids.innerText = profileListing._count.bids;
    div.append(bids);
    
    return div;
}

export default function renderProfileListings(profileListings) {
    const profileContainer = document.querySelector("#profilePostsContainer");
    profileContainer.innerHTML = "";
    const profileHtml = profileListings.map((profileListing) => creatProfileListings(profileListing));
    profileContainer.append(...profileHtml);
}

