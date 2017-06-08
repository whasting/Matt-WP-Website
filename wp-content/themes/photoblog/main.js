let modalOpen = false;

$(window).scroll(function() {
  if ($('.menu').css('display') === 'flex' && menuOpen) {
    $('.menu').css('display', 'none');
    menuOpen = false;
  }

  // let alpha = $(window).scrollTop() / ($('.hero').height() - 200);
  // if (!modalOpen) {
  //   $('nav').css("background-color", `rgba(0, 0, 0, ${alpha})`);
  // }
});

$(window).resize(() => {
  if ($('.menu').css('display') === 'flex' && menuOpen) {
    $('.menu').css('display', 'none');
    menuOpen = false;
  }
});

let $root = $('html, body');
$('a').click(function() {
  if ($('.menu').css('display') === 'flex' && menuOpen) {
    $('.menu').css('display', 'none');
    menuOpen = false;
  }

  let href = $.attr(this, 'href');
  if ($(href).offset()) {
    $root.animate({
        scrollTop: $(href).offset().top - 80
    }, 400);
  }

  return false;
});

let menuOpen = false;

$('.hamburger').click(function() {
  if ($('.menu').css('display') === 'none') {
    $('.menu').css('display', 'flex');
    setTimeout(function() {menuOpen = true;}, 100);
  } else {
    $('.menu').css('display', 'none');
    menuOpen = false;
  }
});

$('body').click(function() {
  if ($('.menu').css('display') === 'flex' && menuOpen) {
    $('.menu').css('display', 'none');
    menuOpen = false;
  }
});

$('.menu-item').click(function() {
  $('.menu').css('display', 'none');
  menuOpen = false;
});

// $('.hero-img').parallax({imageSrc: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t31.0-8/11705668_10206384173823929_5426240319423920261_o.jpg?oh=f1357fc4246cf7b5df41fc7d9f7d2b4c&oe=59A28F6A'});

$('.donate-button').click(() => {
  let prevNavColor = $('nav').css('background-color');
  let heroContent = $('.hero-content');

  if ($('#pum-26').css('display') === 'none') {
    modalOpen = true;
    $('nav').css({'top': $('nav').position().top, 'background-color': prevNavColor});
    if (heroContent.position()) {
      heroContent.css('top', $('.hero-content').position().top);
    }
    $.scrollLock( true );
  }

  $('#pum-26').click(() => {
    modalOpen = false;
    $.scrollLock( false );
  });
});

$(document).ready(function() {
  $('p').has('.hero-img').addClass('hero');
});

const scrollLock = $.scrollLock = ( function scrollLockClosure() {
    'use strict';

    var $html      = $( 'html' ),
        // State: unlocked by default
        locked     = false,
        // State: scroll to revert to
        prevScroll = {
            scrollLeft : $( window ).scrollLeft(),
            scrollTop  : $( window ).scrollTop()
        },
        // State: styles to revert to
        prevStyles = {},
        lockStyles = {
            'overflow-y' : 'scroll',
            'position'   : 'fixed',
            'width'      : '100%'
        };

    // Instantiate cache in case someone tries to unlock before locking
    saveStyles();

    // Save context's inline styles in cache
    function saveStyles() {
        var styleAttr = $html.attr( 'style' ),
            styleStrs = [],
            styleHash = {};

        if( !styleAttr ){
            return;
        }

        styleStrs = styleAttr.split( /;\s/ );

        $.each( styleStrs, function serializeStyleProp( styleString ){
            if( !styleString ) {
                return;
            }

            var keyValue = styleString.split( /\s:\s/ );

            if( keyValue.length < 2 ) {
                return;
            }

            styleHash[ keyValue[ 0 ] ] = keyValue[ 1 ];
        } );

        $.extend( prevStyles, styleHash );
    }

    function lock() {
        var appliedLock = {};

        // Duplicate execution will break DOM statefulness
        if( locked ) {
            return;
        }

        // Save scroll state...
        prevScroll = {
            scrollLeft : $( window ).scrollLeft(),
            scrollTop  : $( window ).scrollTop()
        };

        // ...and styles
        saveStyles();

        // Compose our applied CSS
        $.extend( appliedLock, lockStyles, {
            // And apply scroll state as styles
            'left' : - prevScroll.scrollLeft + 'px',
            'top'  : - prevScroll.scrollTop  + 'px'
        } );

        // Then lock styles...
        $html.css( appliedLock );

        // ...and scroll state
        $( window )
            .scrollLeft( 0 )
            .scrollTop( 0 );

        locked = true;
    }

    function unlock() {
        // Duplicate execution will break DOM statefulness
        if( !locked ) {
            return;
        }

        // Revert styles
        $html.attr( 'style', $( '<x>' ).css( prevStyles ).attr( 'style' ) || '' );

        // Revert scroll values
        $( window )
            .scrollLeft( prevScroll.scrollLeft )
            .scrollTop(  prevScroll.scrollTop );

        locked = false;
    }

    return function scrollLock( on ) {
        // If an argument is passed, lock or unlock depending on truthiness
        if( arguments.length ) {
            if( on ) {
                lock();
            }
            else {
                unlock();
            }
        }
        // Otherwise, toggle
        else {
            if( locked ){
                unlock();
            }
            else {
                lock();
            }
        }
    };
}() );
