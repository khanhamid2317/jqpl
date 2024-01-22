// -----------------------------------  js plugin   ------------

// -----------------------------venobox--------------------
new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});
new VenoBox({
    selector: '.my-video-links',
});
// ----------------------------venobox end----------------------------------

// -----------------------------------  js plugin    -----------------------








// -----------------------------------  jq plugin    ------------------


      $(document).ready(()=> {
       $('.backToTop').click(()=> {
        $('html, body').animate({scrollTop:0}, 500)
       })
          $(window).on('scroll',()=> {
              var scrollTop = $(this).scrollTop();
                   if(scrollTop > 200) {
                     $('.navbar').addClass('navbarBG')
                    } else {
                        $('.navbar').removeClass('navbarBG')
                  }
                  if(scrollTop > 300){
                    $('.backToTop').fadeIn(500)
                } else {
                      $('.backToTop').fadeOut(500)
                    }
              })
              $(window).load(()=> {
                $('.preloader').fadeOut(1000)
              })
      })
// -----------------------------------  jq plugin  ------------------