(function() {
  $(function() {
    var postToFacebook;
    postToFacebook = function(options) {
      var callback, obj;
      callback = function(response) {};
      obj = {
        method: "feed",
        redirect_uri: window.location.href,
        link: options.link,
        description: options.message
      };
      if (options.actions !== undefined) {
        obj.actions = options.actions;
      }
      if (options.name !== undefined) {
        obj.name = options.name;
      }
      if (options.ref !== undefined) {
        obj.ref = options.ref;
      }
      if (options.photo !== undefined) {
        obj.picture = options.photo;
      }
      FB.ui(obj, callback);
    };
    $("a.social-button.twitter, a[rel=twitter-share]").click(function() {
      var left, link, message, top;
      message = encodeURIComponent($(this).data("message"));
      link = encodeURIComponent(($(this).data("link") ? $(this).data("link") : window.location.href));
      left = (screen.width / 2) - (550 / 2);
      top = (screen.height / 2) - (450 / 2);
      window.open("https://twitter.com/share?url=" + link + "&text=" + message, "twittershare", "menubar=0,resizable=1,width=550,height=450,scrollbars=0,location=0,directories=0,toolbar=0,top=" + top + ",left=" + left);
      return false;
    });
    $("a.social-button.gplus, a[rel=gplus-share]").click(function() {
      var left, link, top;
      link = encodeURIComponent(($(this).data("link") ? $(this).data("link") : window.location.href));
      left = (screen.width / 2) - (550 / 2);
      top = (screen.height / 2) - (450 / 2);
      window.open("https://plus.google.com/share?url=" + link, "twittershare", "menubar=0,resizable=1,width=550,height=450,scrollbars=0,location=0,directories=0,toolbar=0,top=" + top + ",left=" + left);
      return false;
    });
    return $("a.social-button.facebook, a[rel=facebook-share]").click(function() {
      var options;
      options = {};
      options.message = $(this).data("message");
      options.link = ($(this).data("link") ? $(this).data("link") : window.location.href);
      if ($(this).data("photo")) {
        options.photo = $(this).data("photo");
      }
      if ($(this).data("ref")) {
        options.ref = $(this).data("ref");
      }
      if ($(this).data("name")) {
        options.name = $(this).data("name");
      }
      if ($(this).data("action-name")) {
        options.actions = "[{'name':'" + $(this).data("action-name") + "','link':'" + ($(this).data("action-link") ? $(this).data("action-link") : window.location.href) + "'}]";
      }
      postToFacebook(options);
      return false;
    });
  });

}).call(this);
