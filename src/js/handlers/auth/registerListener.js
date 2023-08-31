import { register } from "../../api/auth/register/register.js"; 
import displayMessage from "../../ui/common/displayMessage.js";

/**
 * This function handles the listener for the registration form and displays a message if the user successfully registered
 */
export function setRegisterFormListener() {
    const form = document.querySelector("#registerForm");

    if (form) {
        form.addEventListener("submit", async (event) => {
            event.preventDefault()
            const form = event.target;
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData.entries())

            try {
                await register(profile)
                displayMessage("success", "You can now use your registered account to log in.", "#message");
                form.reset();
            } catch (error) {
                console.log(error);
				displayMessage("danger", error, "#message");
            } 
        })
    }
}