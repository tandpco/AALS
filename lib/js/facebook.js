(function() {
  window.fbAsyncInit = function() {
    FB.init({
      appId: window.facebookAppId,
      channelUrl: window.facebookChannelFile,
      status: true,
      cookie: true,
      xfbml: true,
      oauth: true
    });
    $(document).trigger("facebook:ready");
  };

  (function(d, s, id) {
    var fjs, js;
    js = void 0;
    fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/all.js";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");

}).call(this);
