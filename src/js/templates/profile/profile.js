function creatProfile(profile) {
    const div = document.createElement("div");
    div.classList.add("card");
    
    const userName = document.createElement("span");
    userName.innerText = profile.name;
    div.append(userName);

    const credits = document.createElement("credits");
    credits.innerText = profile.credits;
    div.append(credits);

    const avatar = document.createElement("img");
    avatar.innerHTML = profile.avatar;
    div.append(avatar);

    return div;
}

export default function renderProfile(profiles) {
    const profileContainer = document.querySelector("#profileContainer");
    profileContainer.innerHTML = "";
    const profileHtml = [profiles].map((profile) => creatProfile(profile));
    profileContainer.append(...profileHtml);
}

