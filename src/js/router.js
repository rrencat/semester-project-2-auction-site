import * as listeners from "./handlers/index.js";

export default function router() {
    const path = location.pathname;

    switch (path) {
        case "/profile/register/":
            listeners.setRegisterFormListener()
            break; 
    } 
}