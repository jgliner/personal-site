var currentfile = document.location.href.match(/[^\/]+$/)[0];
//var currentfile = document.location["pathname"]

window.addEventListener("scroll", function() {
    if (window.scrollY > 100) {
        $('.navbar').css('background-color', 'rgba(47, 76, 111, 0.7)');
        $('.navbar-collapse').css('background-color', 'transparent');
        $('.in').css('background-color', 'rgb(27, 43, 64)');
        $('.dropdown-menu').css('background-color', 'rgba(47, 76, 111, 0.7)');
        $('.dropdown-menu').css('border', '1px solid rgba(47, 76, 111, 0.7)');
    }
    else {
        $('.navbar').css('background-color', 'transparent');
        $('.in').css('background-color', 'rgb(27, 43, 64)');
        $('.dropdown-menu').css('background-color', 'transparent');
        $('.dropdown-menu').css('border', 'none');
    }
},false);

//Changes stylesheet if in mobile range

if (currentfile === "index.html" || currentfile === "index.html#") {
//if (currentfile === "/" || currentfile === "/#") {
  if ($(window).width() < 768) {
    $("#title").addClass('text-center center-block')
    $("#title").css('position','absolute');
    $(".bmenu").addClass("mmenu text-center center-block").removeClass("bmenu");
    $("svg").get(0).setAttribute("viewBox", "0 0 1 1");
    $("svg").get(0).setAttribute("style", "position: absolute; bottom: 0px; max-height: 380px; top: 45%;");
    $(".mmenu").get(0).setAttribute("style", "right:17%; top:25%; position:relative; list-style-type:none;");
  }

  $(window).on('resize', function() {
    var win = $(this);
    if (win.width() <= 768) {
      $("#title").addClass('text-center center-block');
      $("#title").css('position','absolute');
      $(".bmenu").addClass("mmenu text-center center-block").removeClass("bmenu");
      $("svg").get(0).setAttribute("viewBox", "0 0 1 1");
      $("svg").css("top","45%");
      $(".mmenu").get(0).setAttribute("style", "right:17%; top:25%; position:relative; list-style-type:none;");
    }
    else {
      $("#title").addClass('text-center center-block');
      $(".mmenu").addClass("bmenu").removeClass("mmenu text-center center-block");
      $("svg").get(0).setAttribute("viewBox", "0 0 1620 1620");
      $("svg").css("top","0");    
    }
    if (win.width() > 768) {
      $(window).scrollTop(0);
    }
  });
}

//Dynamically changes margins for main menu

if (currentfile === "index.html" || currentfile === "index.html#") {
//if (currentfile === "/" || currentfile === "/#") {
  if ($(window).width() > 768) {
    
    //Instantiate window width and height
    var h = $(window).height();
    var w = $(window).width();
    var triTop = (500/(1620/h))
    var triBottom = (1620/(1620/h))

    //Calculate v-spacing of menu div   
      if ($(window).width() < 1150) {
        var divheight = $('.bmenu').height();
        var offset = ( $("#title").height()-($("#logo").height()+(.1*h)) );
        $('.bmenu').css('top',offset);
    }
    else {
      var offset = (.30*h)
      $('.bmenu').css('top', offset);
    }

    //Calculate margins between each box
    if ($(window).width() < 1150) {
      var boxmargin = ( (h-(($("#title").height())+($(".bmenu").height())))/3 );
    }
    else {
      var boxmargin = ( (h-(($("#logo").height()+(.25*h))+($(".bmenu").height())))/3-50 );
    }

    if (boxmargin < 0) {
      boxmargin = 0
      offset = ( $("#title").height()-($("#logo").height()+(.1*h)) );
      $('.bmenu').css('top',offset);
      $('#logo').css('left','500px')
      var reducedpadding = (h/18)
      $(".bmenu").children('li').children('a').children('p').css("padding", reducedpadding)
    }

    $(".bmenu").children('li').children('a').children('p').css("margin-bottom", boxmargin);
    $("#triangleoverlay").css("overflow", "hidden");

    //Calculate left positioning of container so left edge is hidden
    var lefthide = String( boxmargin > 0 ? 60 : 55 )+"px";
    $(".bmenu").css("right", lefthide);

    //Instantiate default widths
    var fourthdefault = ($(".bmenu").children('li:nth-child(4)').width());
    var thirddefault = ($(".bmenu").children('li:nth-child(3)').children('a').width());
    var seconddefault = ($(".bmenu").children('li:nth-child(2)').children('a').width());
    var firstdefault = ($(".bmenu").children('li:nth-child(1)').children('a').width());

    // //Calculate box endpoints (start with max, end with 0)
    // var boxwidth4 = String( triBottom-fourthdefault-(boxmargin > 0 ? boxmargin : 0)-($(window).width() < 1150 ? 0 : 80) );
    // $(".bmenu").children('li:nth-child(4)').children('a').children('p').css("padding-left", boxwidth4+"px");

    // var boxwidth3 = String( Number(boxwidth4)-(fourthdefault-thirddefault)-50 );
    // $(".bmenu").children('li:nth-child(3)').children('a').children('p').css("padding-left", boxwidth3+"px");

    // var boxwidth2 = String( Number(boxwidth3)-(seconddefault-thirddefault)-100 );
    // $(".bmenu").children('li:nth-child(2)').children('a').children('p').css("padding-left", boxwidth2+"px");

    // var boxwidth1 = String( Number(boxwidth2)-(seconddefault-firstdefault)-100 );
    // $(".bmenu").children('li:nth-child(1)').children('a').children('p').css("padding-left", boxwidth1+"px");
  }
}

$(window).load(function() {    

  var theWindow        = $(window),
      $bg              = $("#bg"),
      aspectRatio      = $bg.width() / $bg.height();
                    
  function resizeBg() {
    
    if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
        $bg
          .removeClass()
          .addClass('bgheight');
    } else {
        $bg
          .removeClass()
          .addClass('bgwidth');
    }
          
  }
                          
  theWindow.resize(resizeBg).trigger("resize");

});

/*
* debouncedresize: special jQuery event that happens once after a window resize
*
* latest version and complete README available on Github:
* https://github.com/louisremi/jquery-smartresize/blob/master/jquery.debouncedresize.js
*
* Copyright 2011 @louis_remi
* Licensed under the MIT license.
*/
if ($(!"ontouchstart" in document.documentElement)) {
  var $event = $.event,
  $special,
  resizeTimeout;

  $special = $event.special.debouncedresize = {
    setup: function() {
      $( this ).on( "resize", $special.handler );
    },
    teardown: function() {
      $( this ).off( "resize", $special.handler );
    },
    handler: function( event, execAsap ) {
      // Save the context
      var context = this,
        args = arguments,
        dispatch = function() {
          // set correct event type
          event.type = "debouncedresize";
          $event.dispatch.apply( context, args );
        };

      if ( resizeTimeout ) {
        clearTimeout( resizeTimeout );
      }

      execAsap ?
        dispatch() :
        resizeTimeout = setTimeout( dispatch, $special.threshold );
    },
    threshold: 250
  }
};

// ======================= imagesLoaded Plugin ===============================
// https://github.com/desandro/imagesloaded

// $('#my-container').imagesLoaded(myFunction)
// execute a callback when all images have loaded.
// needed because .load() doesn't work on cached images

// callback function gets image collection as argument
//  this is the container

// original: MIT license. Paul Irish. 2010.
// contributors: Oren Solomianik, David DeSandro, Yiannis Chatzikonstantinou

// blank image data-uri bypasses webkit log warning (thx doug jones)
var BLANK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

$.fn.imagesLoaded = function( callback ) {
  var $this = this,
    deferred = $.isFunction($.Deferred) ? $.Deferred() : 0,
    hasNotify = $.isFunction(deferred.notify),
    $images = $this.find('img').add( $this.filter('img') ),
    loaded = [],
    proper = [],
    broken = [];

  // Register deferred callbacks
  if ($.isPlainObject(callback)) {
    $.each(callback, function (key, value) {
      if (key === 'callback') {
        callback = value;
      } else if (deferred) {
        deferred[key](value);
      }
    });
  }

  function doneLoading() {
    var $proper = $(proper),
      $broken = $(broken);

    if ( deferred ) {
      if ( broken.length ) {
        deferred.reject( $images, $proper, $broken );
      } else {
        deferred.resolve( $images );
      }
    }

    if ( $.isFunction( callback ) ) {
      callback.call( $this, $images, $proper, $broken );
    }
  }

  function imgLoaded( img, isBroken ) {
    // don't proceed if BLANK image, or image is already loaded
    if ( img.src === BLANK || $.inArray( img, loaded ) !== -1 ) {
      return;
    }

    // store element in loaded images array
    loaded.push( img );

    // keep track of broken and properly loaded images
    if ( isBroken ) {
      broken.push( img );
    } else {
      proper.push( img );
    }

    // cache image and its state for future calls
    $.data( img, 'imagesLoaded', { isBroken: isBroken, src: img.src } );

    // trigger deferred progress method if present
    if ( hasNotify ) {
      deferred.notifyWith( $(img), [ isBroken, $images, $(proper), $(broken) ] );
    }

    // call doneLoading and clean listeners if all images are loaded
    if ( $images.length === loaded.length ){
      setTimeout( doneLoading );
      $images.unbind( '.imagesLoaded' );
    }
  }

  // if no images, trigger immediately
  if ( !$images.length ) {
    doneLoading();
  } else {
    $images.bind( 'load.imagesLoaded error.imagesLoaded', function( event ){
      // trigger imgLoaded
      imgLoaded( event.target, event.type === 'error' );
    }).each( function( i, el ) {
      var src = el.src;

      // find out if this image has been already checked for status
      // if it was, and src has not changed, call imgLoaded on it
      var cached = $.data( el, 'imagesLoaded' );
      if ( cached && cached.src === src ) {
        imgLoaded( el, cached.isBroken );
        return;
      }

      // if complete is true and browser supports natural sizes, try
      // to check for image status manually
      if ( el.complete && el.naturalWidth !== undefined ) {
        imgLoaded( el, el.naturalWidth === 0 || el.naturalHeight === 0 );
        return;
      }

      // cached images don't fire load sometimes, so we reset src, but only when
      // dealing with IE, or image is complete (loaded) and failed manual check
      // webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
      if ( el.readyState || el.complete ) {
        el.src = BLANK;
        el.src = src;
      }
    });
  }

  return deferred ? deferred.promise( $this ) : $this;
};

var Grid = (function() {

    // list of items
  var $grid = $( '#og-grid' ),
    // the items
    $items = $grid.children( 'li' ),
    // current expanded item's index
    current = -1,
    // position (top) of the expanded item
    // used to know if the preview will expand in a different row
    previewPos = -1,
    // extra amount of pixels to scroll the window
    scrollExtra = 0,
    // extra margin when expanded (between preview overlay and the next items)
    marginExpanded = 10,
    $window = $( window ), winsize,
    $body = $( 'html, body' ),
    // transitionend events
    transEndEventNames = {
      'WebkitTransition' : 'webkitTransitionEnd',
      'MozTransition' : 'transitionend',
      'OTransition' : 'oTransitionEnd',
      'msTransition' : 'MSTransitionEnd',
      'transition' : 'transitionend'
    },
    transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
    // support for csstransitions
    support = Modernizr.csstransitions,
    // default settings
    settings = {
      minHeight : 500,
      speed : 350,
      easing : 'ease'
    };

  function init( config ) {
    
    // the settings..
    settings = $.extend( true, {}, settings, config );

    // preload all images
    $grid.imagesLoaded( function() {

      // save item´s size and offset
      saveItemInfo( true );
      // get window´s size
      getWinSize();
      // initialize some events
      initEvents();

    } );

  }

  // add more items to the grid.
  // the new items need to appended to the grid.
  // after that call Grid.addItems(theItems);
  function addItems( $newitems ) {

    $items = $items.add( $newitems );

    $newitems.each( function() {
      var $item = $( this );
      $item.data( {
        offsetTop : $item.offset().top,
        height : $item.height()
      } );
    } );

    initItemsEvents( $newitems );

  }

  // saves the item´s offset top and height (if saveheight is true)
  function saveItemInfo( saveheight ) {
    $items.each( function() {
      var $item = $( this );
      $item.data( 'offsetTop', $item.offset().top );
      if( saveheight ) {
        $item.data( 'height', $item.height() );
      }
    } );
  }

  function initEvents() {
    
    // when clicking an item, show the preview with the item´s info and large image.
    // close the item if already expanded.
    // also close if clicking on the item´s cross
    initItemsEvents( $items );
    
    // on window resize get the window´s size again
    // reset some values..
    
    if ($(!"ontouchstart" in document.documentElement)) {
      $window.on( 'debouncedresize', function() {
      
        scrollExtra = 0;
        previewPos = -1;
        // save item´s offset
        saveItemInfo();
        getWinSize();
        var preview = $.data( this, 'preview' );
        /*if( typeof preview != 'undefined' ) {
          hidePreview();
        }*/

      } );
    }

  }

  function initItemsEvents( $items ) {
    $items.on( 'click', 'span.og-close', function() {
      hidePreview();
      return false;
    } ).children( 'a' ).on( 'click', function(e) {

      var $item = $( this ).parent();
      // check if item already opened
      current === $item.index() ? hidePreview() : showPreview( $item );
      return false;

    } );
  }

  function getWinSize() {
    winsize = { width : $window.width(), height : $window.height() };
  }

  function showPreview( $item ) {

    var preview = $.data( this, 'preview' ),
      // item´s offset top
      position = $item.data( 'offsetTop' );

    scrollExtra = 0;

    // if a preview exists and previewPos is different (different row) from item´s top then close it
    if( typeof preview != 'undefined' ) {

      {
        // if position > previewPos then we need to take te current preview´s height in consideration when scrolling the window
        if( position > previewPos ) {
          scrollExtra = preview.height;
        }
        hidePreview();
        preview.update( $item );
      }
      
    }

    // update previewPos
    previewPos = position;
    // initialize new preview for the clicked item
    preview = $.data( this, 'preview', new Preview( $item ) );
    // expand preview overlay
    preview.open();

  }

  function hidePreview() {
    current = -1;
    var preview = $.data( this, 'preview' );
    preview.close();
    $.removeData( this, 'preview' );
  }

  // the preview obj / overlay
  function Preview( $item ) {
    this.$item = $item;
    this.expandedIdx = this.$item.index();
    this.create();
    this.update();
  }

  Preview.prototype = {
    create : function() {
      if ($(window).width() > 768) {// create Preview structure:
        this.$title = $( '<h3 class="text-center"></h3>' );
        this.$description = $( '<p></p>' );
        this.$href = $( '<a href="#">See More</a>' );
        this.$details = $( '<div class="og-details"></div>' ).append( this.$title, this.$description, this.$href );
        this.$loading = $( '<div class="og-loading"></div>' );
        this.$fullimage = $( '<div class="og-fullimg top-buffermd"></div>' ).append( this.$loading );
        this.$closePreview = $( '<span class="og-close"></span>' );
        this.$previewInner = $( '<div class="og-expander-inner"></div>' ).append( this.$closePreview, this.$fullimage, this.$details );
        this.$previewEl = $( '<div class="og-expander"></div>' ).append( this.$previewInner );
        // append preview element to the item
        this.$item.append( this.getEl() );
        // set the transitions for the preview and the item
        if( support ) {
          this.setTransition();
        }
      }
      else {// create Preview structure for mobile:
        this.$title = $( '<h3 class="text-center"></h3>' );
        this.$description = $( '<p></p>' );
        this.$href = $( '<a href="#">See More</a>' );
        this.$details = $( '<div class="og-details"></div>' ).append( this.$title, this.$description, this.$href );
        this.$loading = $( '<div class="og-loading"></div>' );
        this.$fullimage = $( '<div class="og-fullimg top-buffermd"></div>' ).append( this.$loading );
        this.$closePreview = $( '<span class="og-close"></span>' );
        this.$previewInner = $( '<div class="og-expander-inner"></div>' ).append( this.$closePreview, this.$details, this.$fullimage );
        this.$previewEl = $( '<div class="og-expander"></div>' ).append( this.$previewInner );
        // append preview element to the item
        this.$item.append( this.getEl() );
        // set the transitions for the preview and the item
        if( support ) {
          this.setTransition();
        }
      }
    },
    update : function( $item ) {


      if( $item ) {
        this.$item = $item;
      }
      

      // if already expanded remove class "og-expanded" from current item and add it to new item
      if( current !== -1 ) {
        var $currentItem = $items.eq( current );
        $currentItem.removeClass( 'og-expanded' );
        this.$item.addClass( 'og-expanded' );
        // position the preview correctly
        this.positionPreview();
      }

      // update current value
      current = this.$item.index();

      // update preview´s content
      var $itemEl = this.$item.children( 'a' ),
        eldata = {
          href : $itemEl.attr( 'href' ),
          largesrc : $itemEl.data( 'largesrc' ),
          largesrcii : $itemEl.data( 'largesrcii' ),
          title : $itemEl.data( 'title' ),
          description : $itemEl.data( 'description' )
        }

      this.$title.html( eldata.title );
      this.$description.html( eldata.description );
      this.$href.attr( 'href', eldata.href );

      var self = this;
      
      // remove the current image in the preview
      if( typeof self.$largeImg != 'undefined' ) {
        self.$largeImg.remove();
      }

      // preload large image and add it to the preview
      // for smaller screens we don´t display the large image (the media query will hide the fullimage wrapper)
      if( self.$fullimage.is( ':visible' ) ) {
        this.$loading.show();
        $( '<img/>' ).load( function() {
          var $img = $( this );
          if( $img.attr( 'src' ) === self.$item.children('a').data( 'largesrc' ) ) {
            self.$loading.hide();
            self.$fullimage.find( 'img' ).remove();
            self.$largeImg = $img.fadeIn( 350 );
            self.$fullimage.append( self.$largeImg );
          }
        } ).attr( 'src', eldata.largesrc ); 
      }

    },
    open : function() {

      setTimeout( $.proxy( function() { 
        // set the height for the preview and the item
        this.calcHeight();
        this.setHeights();
        // scroll to position the preview in the right place
        this.positionPreview();
      }, this ), 25 );

    },
    close : function() {

      var self = this,
        onEndFn = function() {
          if( support ) {
            $( this ).off( transEndEventName );
          }
          self.$item.removeClass( 'og-expanded' );
          self.$previewEl.remove();
        };

      setTimeout( $.proxy( function() {

        if( typeof this.$largeImg !== 'undefined' ) {
          this.$largeImg.fadeOut( 'fast' );
        }
        this.$previewEl.css( 'height', 0 );
        // the current expanded item (might be different from this.$item)
        var $expandedItem = $items.eq( this.expandedIdx );
        $expandedItem.css( 'height', $expandedItem.data( 'height' ) ).on( transEndEventName, onEndFn );

        if( !support ) {
          onEndFn.call();
        }

      }, this ), 25 );

      
      return false;

    },
    calcHeight : function() {

      if ($(window).width() > 768) {
        if( $('.og-details').height() > $('.og-fullimg').height() ) {
          this.height = $('.og-details').height()+185;
          this.itemHeight = this.height+285;
        }
        else {
          this.height = $('.og-fullimg').height()+185;
          this.itemHeight = this.height+285;
        }
      }
      else {
        this.height = ($('.og-details').height()+185) + ($('.og-fullimg').height()+185);
        this.itemHeight = this.height;  
      }
    },
    setHeights : function() {

      var self = this,
        onEndFn = function() {
          if( support ) {
            self.$item.off( transEndEventName );
          }
          self.$item.addClass( 'og-expanded' );
        };

      this.calcHeight();
      this.$previewEl.css( 'height', this.height );
      this.$item.css( 'height', this.itemHeight ).on( transEndEventName, onEndFn );

      if( !support ) {
        onEndFn.call();
      }

    },
    positionPreview : function() {

      // scroll page
      // case 1 : preview height + item height fits in window´s height
      // case 2 : preview height + item height does not fit in window´s height and preview height is smaller than window´s height
      // case 3 : preview height + item height does not fit in window´s height and preview height is bigger than window´s height
      var position = this.$item.data( 'offsetTop' ),
        previewOffsetT = this.$previewEl.offset().top - scrollExtra,
        scrollVal = this.height + this.$item.data( 'height' ) + marginExpanded <= winsize.height ? position : this.height < winsize.height ? previewOffsetT - ( winsize.height - this.height ) : previewOffsetT;
      
      $body.animate( { scrollTop : scrollVal }, settings.speed );

    },
    setTransition  : function() {
      this.$previewEl.css( 'transition', 'height ' + settings.speed + 'ms ' + settings.easing );
      this.$item.css( 'transition', 'height ' + settings.speed + 'ms ' + settings.easing );
    },
    getEl : function() {
      return this.$previewEl;
    }
  }

  return { 
    init : init,
    addItems : addItems
  };

})();

$(".overimg").hover(function () {
  $(this).children('img').css('transform','scale(1.0)');
  $(this).children('.descbox').css('transform', 'translate(-50%, -50%) scale(0.9)');
  $(this).children('.descbox').css('opacity','100');
  $(this).children('img').css('-webkit-filter','grayscale(0%)');
  $(this).children('span').css('background','url(./images/pattern.png), rgba(0, 0, 0, 0.2)');
});

$('.overimg').mouseleave(function () {
  $(this).children('img').css('transform','scale(1.15)');
  $(this).children('.descbox').css('transform', 'translate(-50%, -50%)');
  $(this).children('.descbox').css('opacity','0');
  $(this).children('img').css('-webkit-filter','grayscale(100%)');
  $(this).children('span').css('background','url(./images/pattern.png), rgba(47, 76, 111, 0.5)');
});

$('.hl').on('mouseenter', function(){
  $(this).css('background-color','rgba(195,195,195,0.7)');
  $(this).children('.starbox').children('i').css('margin-right','5px');
  $(this).children('.starbox').children('i').css('font-size','16px');
});

$('.hl').on('mouseleave', function(){
  $(this).css('background-color','transparent');
  $(this).children('.starbox').children('i').css('margin-right','0px');
  $(this).children('.starbox').children('i').css('font-size','16px');
});

//Navbar Stuff//

$('#top').siblings().on('click', function() {
  $('#bs-example-navbar-collapse-1').collapse('hide');
});

/*$('#bs-example-navbar-collapse-1').on('hide.bs.collapse', function() {
  $(this).css('right', '-50%');
});*/

$('#contact').on('click', function() {
  $('.dropdown-menu').removeAttr("style");
});

//Social//

$('.contact').on('click', function(event) {
  if ($(window).width() > 768) {
    event.preventDefault();
    $('input:first-child').css('left', '35%');
    $('input:nth-child(2)').css('left', '43%');
    $('input:nth-child(3)').css('left', '51%');
    $('input:nth-child(4)').css('left', '59%');
  }
  else {
    event.preventDefault();
    $('input:first-child').css({'left': '25%', 'z-index': '300', 'top':'83%'});
    $('input:nth-child(2)').css({'left': '35%', 'z-index': '300', 'top':'83%'});
    $('input:nth-child(3)').css({'left': '65%', 'z-index': '300', 'top':'83%'});
    $('input:nth-child(4)').css({'left': '75%', 'z-index': '300', 'top':'83%'});
    $(window).scrollTop(500);
  }
})

function social(url) {
  var win = window.open(url, '_blank');
  win.focus();
}