$(document).ready(function () {
  $('.carousel__inner').slick({
    speed: 1200,
    // adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: '<button type="button" class="slick-prev"><img src="../icons/chevron\ right\ solid.svg""></button>',
    prevArrow: '<button type="button" class="slick-next"><img src="../icons/chevron\ left\ solid.svg"></button>'
  });
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  // $('.catalog-item__link').each(function (i) {
  //   $(this).on('click', function (e) {
  //     e.preventDefault();
  //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
  //     $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
  //   })
  // })

  // $('.catalog-item__back').each(function (i) {
  //   $(this).on('click', function (e) {
  //     e.preventDefault();
  //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
  //     $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
  //   })
  // });

  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    });
  };
  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  // Modal

  $('[data-modals=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn('slow');
  });

  $('.modal__close').on('click', function () {
    $('.overlay, #consultation, #order, #thanks').fadeOut('slow')
  })

  $('.button__buy').on('click', function () {
    $('.overlay, #order').fadeIn('slow');
  })

  // $('#consultation-form').validate();
  // $('#consultation form').validate({
  //   rules: {
  //     name: "required",
  //     phone: "required",
  //     email: {
  //       required: true,
  //       email: true,
  //     }
  //   },
  //   messages: {
  //     name: "Пожалуйста, введите свое имя!",
  //     phone: "Пожалуйста, введите свой номер телефона!",
  //     email: {
  //       required: "Пожалуйста, введите свою почту!",
  //       email: "Неправильный адрес почты!"
  //     }
  //   }
  // });
  // $('#order form').validate();

  function validateForms(form) {
    $(form).validate({
      rules: {
        name: "required",
        phone: "required",
        email: {
          required: true,
          email: true,
        }
      },
      messages: {
        name: "Пожалуйста, введите свое имя!",
        phone: "Пожалуйста, введите свой номер телефона!",
        email: {
          required: "Пожалуйста, введите свою почту!",
          email: "Неправильный адрес почты!"
        }
      }
    });
  };

  validateForms('#consultation-form');
  validateForms('#consultation form');
  validateForms('#order form');

  $('input[name=phone]').mask("+7 (999) 999-99-99");
});