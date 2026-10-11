// ===============================================
//     header ハンバーガーメニュー
// ===============================================

$(function () {
    $('.hamburger').on('click', function () {
        $('#header').toggleClass('open');
    });

    $('nav a, main').on('click', function () {
        $('#header').removeClass('open');
    });
});


// ===============================================
//     header スクロール表示切替
// ===============================================

$(function () {
    let lastScrollTop = 0;
    const headerHeight = $('#header').outerHeight();

    $(window).on('scroll', function () {
        const currentScroll = $(this).scrollTop(); 

        if (currentScroll < headerHeight) {
            $('#header').removeClass('hidden');
            return;
        }

        if (currentScroll > lastScrollTop) {
            $('#header').addClass('hidden');
        } else {
            $('#header').removeClass('hidden');
        }

        lastScrollTop = currentScroll;
    });
});


// document.addEventListener("DOMContentLoaded", function () {
//   const hamburgerMenu = document.querySelector(".hamburger_menu_btn");
//   const menu = document.querySelector(".hamburger_menu");
//   const menuLinks = menu.querySelectorAll("a");

//   hamburgerMenu.addEventListener("click", function () {
//     menu.classList.toggle("open");
//     document.body.classList.toggle(
//       "body_no_scroll",
//       menu.classList.contains("open")
//     );
//   });

//   menuLinks.forEach(function (link) {
//     link.addEventListener("click", function () {
//       setTimeout(function () {
//         menu.classList.remove("open");
//         document.body.classList.remove("body_no_scroll");
//       }, 500);
//     });
//   });
// });

/* HTML
<div class="hamburger_menu">
  <div class="hamburger_menu_btn">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </div>

  <div class="hamburger_menu_list_wrapper">
    <ul class="hamburger_menu_list">
      <li class="menu_item"><a href="">Home</a></li>
      <li class="menu_item"><a href="">About</a></li>
      <li class="menu_item"><a href="">Services</a></li>
      <li class="menu_item"><a href="">Contact</a></li>
    </ul>
  </div>
</div>
*/
