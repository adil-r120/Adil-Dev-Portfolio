// GitHub Pages SPA redirect script
(function() {
  var l = window.location;
  var path = l.pathname + l.search + l.hash;
  
  // If we're not at the root and there's no file extension, redirect to index.html
  if (l.pathname !== '/' && l.pathname.indexOf('.') === -1) {
    // Store the original path in sessionStorage
    sessionStorage.setItem('redirectPath', path);
    
    // Redirect to the root with a hash-based router approach
    l.replace(l.protocol + '//' + l.host + '/#' + path);
  }
})();