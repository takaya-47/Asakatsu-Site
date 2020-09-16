'use strict'

{
  // ここからheader
  let headerHeight = $('header').height();
  $('body').css('padding-top', headerHeight + 10);
  // ここまでheader

  // ここからページ内リンク
  $('.menu-top').click(function () {
    let headerHeight = $('header').height() + 15;
    let menuTop = $('.nav-container').offset().top - headerHeight;
    $('html, body').animate({ scrollTop: menuTop }, 500);
  });

  $('.menu-about').click(function () {
    let headerHeight = $('header').height() + 15;
    let menuAbout = $('intro').offset().top - headerHeight;
    $('html, body').animate({ scrollTop: menuAbout }, 500);
  });

  $('.menu-reasons').click(function () {
    let headerHeight = $('header').height() + 15;
    let menuReasons = $('main').offset().top - headerHeight;
    $('html, body').animate({ scrollTop: menuReasons }, 500);
  });

  $('.menu-merits').click(function () {
    let headerHeight = $('header').height() + 15;
    let menuMerits = $('.merits').offset().top - headerHeight;
    $('html, body').animate({ scrollTop: menuMerits }, 500);
  });

  $('.menu-tips').click(function () {
    let headerHeight = $('header').height() + 15;
    let menuTips = $('tips').offset().top - headerHeight;
    $('html, body').animate({ scrollTop: menuTips }, 500);
  });

  $('.menu-spots').click(function () {
    let headerHeight = $('header').height() + 15;
    let menuSpots = $('.map').offset().top - headerHeight;
    $('html, body').animate({ scrollTop: menuSpots }, 500);
  });

  $('.menu-contact').click(function () {
    let headerHeight = $('header').height() + 15;
    let menuContact = $('.contact-form').offset().top - headerHeight;
    $('html, body').animate({ scrollTop: menuContact }, 500);
  });
  // ここまでページ内リンク

  // ここからnav
  $('nav h1').fadeIn(500);
  $('nav li.one').fadeIn(1000);
  $('nav li.two').fadeIn(1200);
  $('nav li.three').fadeIn(1400);
  $('nav li.four').fadeIn(1600);
  $('nav li.five').fadeIn(1800);
  $('nav p').fadeIn(2800);
  // ここまでnav

  // ここからmain
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scrollAmount = $(window).scrollTop();
    $('.scrollAnime').each(function () {
      const targetPosition = $(this).offset().top;
      if (scrollAmount > targetPosition - windowHeight + 100) {
        $(this).addClass("fadeIn");
      }
    });
  });
  // ここまでmain

  // ここからタブメニュー
  const menuTabs = document.querySelectorAll('tips .tab-menu li a');
  const contents = document.querySelectorAll('.content');

  menuTabs.forEach(clickedtab => {
    clickedtab.addEventListener('click', e => {
      e.preventDefault();

      menuTabs.forEach(tab => {
        tab.classList.remove('active');
      });
      clickedtab.classList.add('active');

      contents.forEach(content => {
        content.classList.remove('active');
      });
      document.getElementById(clickedtab.dataset.id).classList.add('active');
    });
  });
  // ここまでタブメニュー

  // ここからお問い合わせフォーム
  $('form').validate({
    rules: {
      name: {
        required: true
      },
      mail: {
        required: true,
        email: true
      },
      text: {
        required: true,
      }
    },
    messages: {
      name: {
        required: '名前は必須項目です'
      },
      mail: {
        required: 'メールアドレスは必須項目です'
      },
      text: {
        required: 'お問い合わせ内容は必須項目です'
      }
    },
    errorPlacement: function (err, elem) {
      if (elem.attr('name') === 'name') {
        err.insertAfter($('.nameError'));
      } else if (elem.attr('name') === 'mail') {
        err.insertAfter($('.mailError'));
      } else if (elem.attr('name') === 'text') {
        err.insertAfter($('.textError'));
      }
    }
  });
// ここまでお問い合わせフォーム
  
  // ここからモーダルウィンドウ用シェアボタン
  $('.open').hide();

  $(window).scroll(function () {
    const scrollAmount = $(window).scrollTop();
    if (scrollAmount > 800) {
      $('.open').fadeIn(1000);
    } else {
      $('.open').fadeOut(500);
    }
  });
  // ここまでモーダルウィンドウ用シェアボタン

  // ここからモーダルウィンドウ
  const open = document.querySelector('.open');
  const close = document.querySelector('.modal-close');
  const mask = document.getElementById('mask');
  const modal = document.getElementById('modal');

  open.addEventListener('click', () => {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
  });

  mask.addEventListener('click', () => {
    mask.classList.add('hidden');
    modal.classList.add('hidden');
  });

  close.addEventListener('click', () => {
    mask.click();
  });
  // ここまでモーダルウィンドウ

// ここからトップへ戻るボタン
$('.top').hide();

$(window).scroll(function () {
  const scrollAmount = $(window).scrollTop();
  if (scrollAmount > 800) {
    $('.top').fadeIn(1000);
  } else {
    $('.top').fadeOut(500);
  }
});

$('.top').click(function () {
  $('html').animate({ scrollTop: 0 }, 500);
});
  // ここまでトップへ戻るボタン
}