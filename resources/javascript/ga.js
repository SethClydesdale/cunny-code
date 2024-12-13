// Google Analytics/Adsense
// disabled if used locally or on another host
if (window.location.hostname == 'sethclydesdale.github.io') {
  // Analytics
  (function (window, document, id) {
    var gtag = document.createElement('SCRIPT');
    gtag.async = true;
    gtag.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
    gtag.onload = function () {
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', id);
    };
    
    document.head.appendChild(gtag);
  }(window, document, 'G-ZKM3LMWZE7'));
  
  
  // Adsense
  (function (window, document, id) {
    // exclusions
    if (/\/donate\//.test(window.location.pathname)) return false;
    
    var adsense = document.createElement('SCRIPT');
    adsense.async = true;
    adsense.crossorigin = 'anonymous';
    adsense.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + id;
    document.head.appendChild(adsense);
    
    // function for inserting ads into document
    var insertAds = function() {
      var content = document.getElementById('encoder'), ad;
      
      if (content) {
        // ad format
        ad = '<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="' + id + '" data-ad-slot="{SLOT}"></ins>';

        // bottom page ad
        content.insertAdjacentHTML('beforeend', '<div class="ad-container ad-bottom">' + ad.replace('{SLOT}', '4309807952') + '</div>');
        (adsbygoogle = window.adsbygoogle || []).push({});
      }
    };
    
    // wait until DOM loaded to insert ads
    if (document.readyState !== 'loading') {
      insertAds();
    } else {
      document.addEventListener('DOMContentLoaded', insertAds);
    }
    
  }(window, document, 'ca-pub-2159011770843378'));
}