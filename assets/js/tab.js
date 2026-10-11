document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".tab_group").forEach((group) => {
    const buttonContainer = group.querySelector(".tab_buttons");
    const contentContainer = group.querySelector(".tab_contents");

    if (!buttonContainer || !contentContainer) return;

    const tabButtons = buttonContainer.querySelectorAll(".tab_button");
    const tabContents = contentContainer.querySelectorAll(".tab_content");

    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.getAttribute("data-target");

        tabButtons.forEach((btn) => btn.classList.remove("active"));
        tabContents.forEach((tab) => tab.classList.remove("active"));

        button.classList.add("active");
        const targetEl = contentContainer.querySelector(`#${target}`);
        if (targetEl) {
          targetEl.classList.add("active");

          const nestedGroup = targetEl.querySelector(".tab_group");
          if (nestedGroup) {
            const nestedButtons = nestedGroup.querySelectorAll(
              ".tab_buttons .tab_button"
            );
            const nestedContents = nestedGroup.querySelectorAll(
              ".tab_contents .tab_content"
            );

            nestedButtons.forEach((btn) => btn.classList.remove("active"));
            nestedContents.forEach((ctn) => ctn.classList.remove("active"));

            if (nestedButtons[0]) nestedButtons[0].classList.add("active");
            if (nestedContents[0]) nestedContents[0].classList.add("active");
          }
        }
      });
    });
  });
});
