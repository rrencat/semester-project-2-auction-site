import hideSearchResults from "./hideSearchResults.js";

export default function displaySearchResults(results) {
    const resultsContainer = document.querySelector("#searchResults");
    resultsContainer.innerHTML = " ";

    if (results.length === 0) {
        hideSearchResults();
        return;
    }

    results.forEach((result) => {
        const link = document.createElement("div");
        link.classList.add("card");
        link.innerHTML = `<h2>${result.title}</h2>
                            <p>${result.description}</p>
                            <p>${result.endsAt}</p>`;
        resultsContainer.appendChild(link);
    });

    resultsContainer.style.display = "block"
}