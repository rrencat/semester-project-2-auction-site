import { search } from "../../api/listings/search.js";
import displaySearchResults from "../../ui/listings/displaySearchResults.js";
import hideSearchResults from "../../ui/listings/hideSearchResults.js";

export default function searchListener() {
    const input = document.querySelector("#search");

    input.addEventListener("input", doSearch);
}

async function doSearch(event) {
    const tag = event.target.value.trim();

    if (tag.length < 3) {
        return hideSearchResults();
    }

    try {
        const results = await search(tag);
        console.log(results);
        displaySearchResults(results);
    } catch (err) {
        console.log(err);
    }
}