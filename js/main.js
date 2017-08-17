// Google Analytics
(function(i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function() {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date();
  a = s.createElement(o),
  m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-18358274-4', 'auto');
ga('send', 'pageview');

$(document).ready(function() {
  // Google Analytics
  $('a, button').click(function(e) {
    if (this.id) {
      ga('send', 'event', 'dubleviz', this.id);
    }
  });

  // CTA and Modal
  $('.cta').click(function(e) {
    setTimeout(function() {
      $('#modal').modal('show');
    }, 700);
  });
  $('#modal').on('shown.bs.modal', function(e) {
    $('#form-input').focus();
  });

  // Modal Form
  $('#form-input').change(function(e) {
    var email = $(this).val();
    if (email !== null && isEmail(email)) {
      $(this).parent().removeClass("has-danger");
      $(this).removeClass("form-control-danger");
    } else {
      $(this).parent().addClass("has-danger");
      $(this).addClass("form-control-danger");
    }
  });
  $('#form').submit(function(e) {
    var email = $('#form-input').val();
    if (email === null || !isEmail(email)) {
      return false;
    }
    setTimeout(function() {
      $('#modal').modal('hide');
    }, 500);
  });
});

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})$/;
  return regex.test(email);
}
