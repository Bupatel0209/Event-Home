// Tarang 2025 - Event Registration Links

document.addEventListener("DOMContentLoaded", () => {

  const formLinks = {
    codeSprint: "PASTE_GOOGLE_FORM_LINK_HERE",
    hackathon: "https://forms.gle/zAc78AJAFVh6yCTb8",
    freeFire: "PASTE_GOOGLE_FORM_LINK_HERE",
    talentShow: "PASTE_GOOGLE_FORM_LINK_HERE",
    khatron: "PASTE_GOOGLE_FORM_LINK_HERE"
  };

  document.getElementById("codeSprintBtn").href = formLinks.codeSprint;
  document.getElementById("hackathonBtn").href = formLinks.hackathon;
  document.getElementById("freeFireBtn").href = formLinks.freeFire;
  document.getElementById("talentShowBtn").href = formLinks.talentShow;
  document.getElementById("khatronBtn").href = formLinks.khatron;

});
