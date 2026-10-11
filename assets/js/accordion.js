document.addEventListener("DOMContentLoaded", function () {
  var accordionTitles = document.querySelectorAll(".accordion_title");

  accordionTitles.forEach(function (title, index) {
    title.addEventListener("click", function () {
      var accordionBox = this.nextElementSibling;

      if (accordionBox.style.maxHeight) {
        accordionBox.style.maxHeight = null;
        this.classList.remove("open");
      } else {
        accordionBox.style.maxHeight = accordionBox.scrollHeight + "px";
        this.classList.add("open");
      }
    });
  });
});
