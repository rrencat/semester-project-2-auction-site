function creatProfile(profile) {
    const div = document.createElement("div");
    div.classList.add("card");
    div.classList.add("profileCard");

    const avatar = document.createElement("img");
    avatar.classList.add("avatarPhoto");
    avatar.src = profile.avatar;
    div.append(avatar);
    
    const userName = document.createElement("span");
    userName.innerText = profile.name;
    div.append(userName);

    const credits = document.createElement("credits");
    credits.innerHTML = `<strong>Credits:</strong> ${profile.credits}`;
    div.append(credits);

    return div;
}

export default function renderProfile(profiles) {
    const profileContainer = document.querySelector("#profilePostsContainer");
    profileContainer.innerHTML = "";
    const profileHtml = [profiles].map((profile) => creatProfile(profile));
    profileContainer.append(...profileHtml);
}

