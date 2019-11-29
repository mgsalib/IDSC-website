 // scrolling header
 $(window).scroll(function () {
     if ($(this).scrollTop() > $(window).height() / 4) {
         $("#main_header").addClass("scroll_navbar").fadeIn;
         // $('.scroll_navbar').fadeOut();
     } else {
         $("#main_header").removeClass("scroll_navbar").fadeOut;
         // $('.scroll_navbar').fadeIn();
     }
 });

 // load external html pages
 $(document).ready(function () {
     $("#main_header").loadHTML('pages/header.html');
     $("#main_content").loadHTML('pages/home.html');
     $("#main_footer").loadHTML('pages/footer.html');
 });

 function PagesNavigation(evt) {
     var PageName = evt.dataset.pagename;
     $("#main_content").loadHTML('pages/' + PageName + '.html');
 }