"use strict";

const joinForm = document.querySelector("#join-form");
const formStatus = document.querySelector("#form-status");

if (joinForm && formStatus) {
  const requiredFields = [
    document.querySelector("#full-name"),
    document.querySelector("#email"),
    document.querySelector("#interest")
  ];

  requiredFields.forEach((field) => {
    if (!field) return;
    field.addEventListener("input", () => field.classList.remove("field-invalid"));
    field.addEventListener("change", () => field.classList.remove("field-invalid"));
  });

  joinForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent = "";
    formStatus.classList.remove("error");

    const invalidFields = requiredFields.filter((field) => {
      if (!field) return false;
      const isValid = field.checkValidity() && field.value.trim().length > 0;
      field.classList.toggle("field-invalid", !isValid);
      return !isValid;
    });

    if (invalidFields.length > 0) {
      formStatus.textContent = "Provjeri označena polja i unesi ispravne podatke.";
      formStatus.classList.add("error");
      invalidFields[0].focus();
      return;
    }

    const name = document.querySelector("#full-name").value.trim();
    formStatus.textContent = `Hvala, ${name}! Forma je uspješno provjerena. Ovo je demonstracija - poruka nije poslana na server.`;
    joinForm.reset();
  });
}

const yearElement = document.querySelector("#year");
if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}
