function creatProfile(profile) {
    const div = document.createElement("div");
    div.classList.add("card");

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

    const editAvatar = document.createElement("button");
    editAvatar.classList.add("btn");
    editAvatar.classList.add("btn-outline-primary");
    editAvatar.classList.add("mb-2");
    editAvatar.innerText = "Edit Avatar";
    div.append(editAvatar);

    return div;
}

export default function renderProfile(profiles) {
    const profileContainer = document.querySelector("#profilePostsContainer");
    profileContainer.innerHTML = "";
    const profileHtml = [profiles].map((profile) => creatProfile(profile));
    profileContainer.append(...profileHtml);
}

