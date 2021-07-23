const elementButton = document.querySelector("[data-button]");

export const Modal = {
  toggleMenu(event) {
    
    if (event.type === "touchstart") event.preventDefault();

    const navigation = document.querySelector("[data-navigation]");
          navigation.classList.toggle("active");

    const active = navigation.classList.contains("active");

    event.currentTarget.setAttribute("aria-expanded", active);

    if (active) {
      event.currentTarget.setAttribute("aria-label", "Close Menu");
    } else {
      event.currentTarget.setAttribute("aria-label", "Open Menu");
    }
  },
};

elementButton.addEventListener("click", Modal.toggleMenu);
elementButton.addEventListener("touchstart", Modal.toggleMenu);

 