const navBarUL = document.querySelector('[data-js="navigation"]');

export default function navBar() {
  const buttonHome = document.createElement("button");
  buttonHome.classList.add("navigation-item", "home");

  const buttonBookmarkNav = document.createElement("button");
  buttonBookmarkNav.classList.add("navigation-item", "bookmark-nav");

  const buttonNewCard = document.createElement("button");
  buttonNewCard.classList.add("navigation-item", "new-card");

  const buttonProfile = document.createElement("button");
  buttonProfile.classList.add("navigation-item", "profile");

  navBarUL.append(buttonHome);
  navBarUL.append(buttonBookmarkNav);
  navBarUL.append(buttonNewCard);
  navBarUL.append(buttonProfile);
}



