document.querySelectorAll(".fileInput").forEach((input) => {
  input.addEventListener("change", function () {
    const wrapper = input.closest(".form_item__image_register__input_item");
    const fileName = wrapper.querySelector(".filename");
    if (this.files.length > 0) {
      fileName.textContent = this.files[0].name;
    } else {
      fileName.textContent = "";
    }
  });
});
