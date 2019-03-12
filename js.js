// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

///////////////////////////////////////////////////////////////////////////////

// For the NAVBAR
$(document).ready(
  function() {
    $('.menu-toggle').click(function() {
      $('nav').toggleClass('active')
    })

    $('ul li').click(function() {
      $(this).siblings().removeClass('active');
      $(this).toggleClass('active');
    })
  }
)