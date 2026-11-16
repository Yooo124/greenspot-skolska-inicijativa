"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");
const navLinks = document.querySelectorAll("#primary-nav a");

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute("aria-label", isExpanded ? "Otvori navigaciju" : "Zatvori navigaciju");
    primaryNav.classList.toggle("is-open", !isExpanded);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      primaryNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Otvori navigaciju");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && primaryNav.classList.contains("is-open")) {
      primaryNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Otvori navigaciju");
      menuToggle.focus();
    }
  });
}
