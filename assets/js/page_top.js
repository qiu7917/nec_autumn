// document.addEventListener("DOMContentLoaded", function () {
//   var pageTopBtn = document.querySelector("a.page_top_btn");

//   window.addEventListener("scroll", function () {
//     if (window.scrollY > 200) {
//       pageTopBtn.style.opacity = "1";
//       pageTopBtn.style.pointerEvents = "auto";
//     } else {
//       pageTopBtn.style.opacity = "0";
//       pageTopBtn.style.pointerEvents = "none";
//     }
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const OFFSET =
//     -3.75 * parseFloat(getComputedStyle(document.documentElement).fontSize); // -3.75rem to pixels

//   document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//     anchor.addEventListener("click", function (e) {
//       e.preventDefault();

//       const targetId = this.getAttribute("href").substring(1);
//       const targetElement = document.getElementById(targetId);

//       if (targetElement) {
//         const elementPosition = targetElement.getBoundingClientRect().top;
//         const offsetPosition = elementPosition + window.pageYOffset + OFFSET;

//         window.scrollTo({
//           top: offsetPosition,
//           behavior: "smooth",
//         });
//       }
//     });
//   });
// });



document.addEventListener("DOMContentLoaded", function () {
  const pageTopBtn = document.querySelector("a.page_top_btn");
  const footer = document.querySelector("#footer");
  const MARGIN_BOTTOM = 30;

  window.addEventListener("scroll", function () {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const viewBottom = scrollPosition + windowHeight;
    const footerTop = footer.getBoundingClientRect().top + scrollPosition;

    // 1. 表示・非表示
    if (scrollPosition > 200) {
      pageTopBtn.style.opacity = "1";
      pageTopBtn.style.pointerEvents = "auto";
    } else {
      pageTopBtn.style.opacity = "0";
      pageTopBtn.style.pointerEvents = "none";
    }

    // 2. 止める判定（SP以外：画面幅が 480px 以上の時だけ実行）
    if (window.innerWidth >= 488) { 
      if (viewBottom >= footerTop - MARGIN_BOTTOM) {
        pageTopBtn.classList.add("is-stopped");
        const footerHeight = document.documentElement.scrollHeight - footerTop;
        pageTopBtn.style.bottom = (footerHeight + MARGIN_BOTTOM) + "px";
      } else {
        pageTopBtn.classList.remove("is-stopped");
        pageTopBtn.style.bottom = ""; // CSSの 2rem に戻る
      }
    } else {
      // SPの時は強制的にクラスを外し、JSのbottom指定を消す
      pageTopBtn.classList.remove("is-stopped");
      pageTopBtn.style.bottom = ""; 
    }
  });
});