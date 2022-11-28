$(document).ready(function() {
  // MODAL
  var modalText = {
    compras: {
      title: 'ComprasYventas',
      tag: 'Logistics.',
      detail:
        'Logistics website with escrow service.Wordpress.',
      link: 'https://comprasyventas.sivevskidesign.com/'
    },
    gsa: {
      title: 'GSA',
      tag: 'SMALL BUSINESS WEB TEMPLATE.',
      detail:
        'Web template ideal for a small business.Created with Bootstrap',
      link: 'https://https://gsa.sivevskidesign.com/'
    },
    astoria: {
      title: 'Astoria Transport',
      tag: 'ESCROW SERVICE.',
      detail:
        'Astoria-Transport reduces the risks of fraud for those who are buying or selling over the Internet, when dealing with consumer-to-consumer, business-to-consumer or business-to-business transactions.',
      link: 'https://casualescrow.sivevskidesign.com/'
    },
    bike: {
      title: 'CrazyBikeRide',
      tag: 'TRAVEL BLOG',
      detail:
        'Blog site  for cycling adventures built in Wordpress using dynamic posts',
      link: 'https://biking.sivevskidesign.com/'
    },
    looplab: {
      title: 'Looplab',
      tag: 'NGO webiste',
      detail:
        'Web template for NGO website.Created with Bootstrap',
        link: 'https://looplab.sivevskidesign.com/'
    },
    basket: {
      title: 'Basket Organic',
      tag: 'Organic E-shop.',
      detail:
        'Basket Organic is a place to buy fresh fruit and vegetables.Integrated blog section with nutritionist advices.Built with Bootstrap and Angular Js.',
        link: 'http://basketorganic.sivevskidesign.com/'
    }
  };

  $('#gallery .button').on('click', function() {
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $('#next').click(function() {
    shiftSlide(-1);
  });
  $('#prev').click(function() {
    shiftSlide(1);
  });

  carousel.on('mousedown', function() {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function() {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function() {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup');
    carousel
      .off('mousemove')
      .addClass('transition')
      .css('transform', 'translateX(' + direction * slideWidth + 'px)');
    setTimeout(function() {
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition');
      carousel.css('transform', 'translateX(0px)');
    }, 700);
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link)
      $('#modal .button')
        .addClass('visible')
        .parent()
        .attr('href', modalText[id].link);

    $.each($('#modal li'), function(index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      $(this).css({
        background:
          "url('/media/img/slides/" + id + '-' + index + ".jpg') center center/cover",
        backgroundSize: 'cover'
      });
    });
  }
});
