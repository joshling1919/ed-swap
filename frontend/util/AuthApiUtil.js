var getCSRF =  function() {
    var metas = document.getElementsByTagName('meta');

    for (var i=0; i<metas.length; i++) {
      if (metas[i].getAttribute("name") == 'csrf-token') {
        return metas[i].getAttribute("content");
      }
    }

    return "";
  }

$.ajax({
    data: { user: { email: 'jling@appacademy.io',
    password: 'password',
    password_confirmation: 'password'},
    CSRF: getCSRF()},
    url: 'http://localhost:3000/users',
    type: 'POST'
})
