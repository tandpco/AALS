
window.fbAsyncInit = ->
  FB.init
    appId: window.facebookAppId
    channelUrl: window.facebookChannelFile # Path to your Channel File
    status: true # check login status
    cookie: true # enable cookies to allow the server to access the session
    xfbml: true # parse XFBML
    oauth: true
  $(document).trigger "facebook:ready"
  return

((d, s, id) ->
  js = undefined
  fjs = d.getElementsByTagName(s)[0]
  return  if d.getElementById(id)
  js = d.createElement(s)
  js.id = id
  js.src = "//connect.facebook.net/en_US/all.js"
  fjs.parentNode.insertBefore js, fjs
  return
) document, "script", "facebook-jssdk"