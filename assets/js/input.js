const radios = document.querySelectorAll('input[type="radio"]');

radios.forEach((radio) => {
  radio.addEventListener("change", () => {
    const groupName = radio.name;
    const groupRadios = document.querySelectorAll(
      `input[type="radio"][name="${groupName}"]`
    );

    groupRadios.forEach((r) => {
      r.closest("label")?.classList.remove("input_active");
    });

    if (radio.checked) {
      radio.closest("label")?.classList.add("input_active");
    }
  });
});
