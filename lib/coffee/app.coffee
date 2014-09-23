
$ ->
  postToFacebook = (options) ->
    
    # calling the API ...
    callback = (response) ->
    obj =
      method: "feed"
      redirect_uri: window.location.href
      link: options.link
      description: options.message

    obj.actions = options.actions  unless options.actions is `undefined`
    obj.name = options.name  unless options.name is `undefined`
    obj.ref = options.ref  unless options.ref is `undefined`
    obj.picture = options.photo  unless options.photo is `undefined`
    FB.ui obj, callback
    return
  $("a.social-button.twitter, a[rel=twitter-share]").click ->
    if not $(this).data("message")
      message = encodeURIComponent($("title").text())
    else
      message = encodeURIComponent($(this).data("message"))
    link = encodeURIComponent((if $(this).data("link") then $(this).data("link") else window.location.href))
    left = (screen.width / 2) - (550 / 2)
    top = (screen.height / 2) - (450 / 2)
    window.open "https://twitter.com/share?url=" + link + "&text=" + message, "twittershare", "menubar=0,resizable=1,width=550,height=450,scrollbars=0,location=0,directories=0,toolbar=0,top=" + top + ",left=" + left
    false

  $("a.social-button.gplus, a[rel=gplus-share]").click ->
    link = encodeURIComponent((if $(this).data("link") then $(this).data("link") else window.location.href))
    left = (screen.width / 2) - (550 / 2)
    top = (screen.height / 2) - (450 / 2)
    window.open "https://plus.google.com/share?url=" + link, "twittershare", "menubar=0,resizable=1,width=550,height=450,scrollbars=0,location=0,directories=0,toolbar=0,top=" + top + ",left=" + left
    false

  $("a.social-button.facebook, a[rel=facebook-share]").click ->
    options = {}
    options.message = ($(this).data("message"))
    options.link = ((if $(this).data("link") then $(this).data("link") else window.location.href))
    options.photo = $(this).data("photo")  if $(this).data("photo")
    options.ref = $(this).data("ref")  if $(this).data("ref")
    options.name = $(this).data("name")  if $(this).data("name")
    options.actions = "[{'name':'" + $(this).data("action-name") + "','link':'" + ((if $(this).data("action-link") then $(this).data("action-link") else window.location.href)) + "'}]"  if $(this).data("action-name")
    postToFacebook options
    false
