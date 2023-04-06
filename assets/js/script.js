$(function(){
  $('.header-slider').slick({
    dots:true,
    prevArrow: '<button type="button" class="slick-prev"><img src="assets/img/prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="assets/img/next.svg" alt=""></button>',
    vertical: true,
    responsive: [ {
      breakpoint: 361,
      settings: {
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
      }

    }
    ]
  });

  $('.product__name').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: '.product__content',
    vertical: true,
    prevArrow: '<button type="button" class="product-prev"><img src="assets/img/pr-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="product-next"><img src="assets/img/pr-next.svg" alt=""></button>',
    centerMode: true,
    responsive: [ {
      breakpoint: 891,
      settings: {
        vertical: false,
        slidesToShow: 3,
        arrows: false,
        dots: true
      },
      breakpoint: 755,
      settings: {
        vertical: false,
        slidesToShow: 1,
        arrows: false,
        dots: true,
      }

    }
    ]
  });
  $('.product__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product__name',
    arrows: false
  });

  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('meni__list--active')
  });

})