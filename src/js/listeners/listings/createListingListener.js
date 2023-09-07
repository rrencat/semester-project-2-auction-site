import { getListings } from "../../api/listings/index.js";
import { displayMessage } from "../../ui/common/displayMessage.js";

export function setCreateListingListener() {
    const form = document.querySelector("#createListing");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);

            try {
                const title = formData.get("title");
                const body = formData.get("body");
                const tags = formData.get("tags");
                const media = formData.get("media");
    
                const listing = {
                    title: title,
                    body: body,
                };
    
                listing.tags = [tags];
                listing.media = [media];
    
                getListings();
                displayMessage("success", "you have successfully created a listing", "#message")
            } catch (error) {
                console.log(error);
                displayMessage("danger", error, "#message");
            }
            
        })
    }
}


