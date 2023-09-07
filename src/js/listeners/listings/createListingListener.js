import { createListing } from "../../api/listings/create.js";
import displayMessage from "../../ui/common/displayMessage.js";

export function setCreateListingListener() {
    const form = document.querySelector("#createListing");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);

            try {
                const title = formData.get("title");
                const description = formData.get("description");
                const endsAt = formData.get("endsAt");
                const tags = formData.get("tags");
                const media = formData.get("media");
    
                const listing = {
                    title: title,
                    body: description, endsAt
                };
    
                listing.tags = [tags];
                listing.media = [media];
    
                createListing();
                displayMessage("success", "you have successfully created a listing", "#message")
            } catch (error) {
                console.log(error);
                displayMessage("danger", error, "#message");
            }
            
        })
    }
}


