/* ================================================
   Physical Design Interview Guide — Hugo Theme JS
   ================================================ */

/* ---------- Dark / Light theme toggle ---------- */
(function () {
  var root  = document.documentElement;
  var saved = localStorage.getItem('theme') || 'light';
  root.setAttribute('data-theme', saved);

  window.toggleTheme = function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    // Sync Giscus comments iframe to match site theme
    var giscus = document.querySelector('iframe.giscus-frame');
    if (giscus) {
      giscus.contentWindow.postMessage(
        { giscus: { setConfig: { theme: next } } },
        'https://giscus.app'
      );
    }
  };
})();

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Mobile menu toggle ---------- */
  var toggle = document.querySelector('.menu-toggle');
  var nav    = document.querySelector('.main-navigation');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('toggled');
    });
  }

  /* ---------- Search box toggle ---------- */
  var searchBtn = document.querySelector('.search-toggle');
  var searchBox = document.querySelector('.search-box-wrapper');
  if (searchBtn && searchBox) {
    searchBtn.addEventListener('click', function (e) {
      e.preventDefault();
      searchBox.classList.toggle('open');
      if (searchBox.classList.contains('open')) {
        searchBox.querySelector('input').focus();
      }
    });
  }

  /* ---------- Active nav tab highlight ---------- */
  var currentPath = window.location.pathname.replace(/\/+$/, '') || '/';
  document.querySelectorAll('.main-navigation ul li a').forEach(function (link) {
    var linkPath = new URL(link.href, window.location.origin).pathname.replace(/\/+$/, '') || '/';
    if (linkPath === currentPath || (linkPath !== '/' && currentPath.indexOf(linkPath) === 0)) {
      link.classList.add('active');
    }
  });

  /* ---------- Dynamic posts sidebar ---------- */
  loadDynamicPostsWidget();

  /* ---------- Copyright year ---------- */
  var yr = document.getElementById('creditsyear');
  if (yr) yr.textContent = new Date().getFullYear();
});

/* ---------- Dynamic posts list in sidebar ---------- */
function loadDynamicPostsWidget() {
  var listTitle = document.getElementById('dynamic-list-title');
  var listEl    = document.getElementById('dynamic-posts-list');
  if (!listEl) return;

  var path  = window.location.pathname;
  var label = null;

  /* Category page: /categories/cts/ → label = "cts" */
  if (path.indexOf('/categories/') !== -1) {
    var parts = path.split('/categories/');
    label = decodeURIComponent(parts[1].replace(/\//g, '')).toLowerCase();
    localStorage.setItem('lastLabel', label);
  }

  /* Homepage: clear saved label */
  if (path === '/' || path === '/index.html') {
    localStorage.removeItem('lastLabel');
    label = null;
  }

  /* Single post: use last visited category */
  if (!label && path.indexOf('/posts/') !== -1) {
    label = localStorage.getItem('lastLabel');
  }

  /* Update sidebar title */
  if (listTitle) {
    if (label) {
      var display = label.replace(/-/g, ' ').replace(/\b\w/g, function(c){ return c.toUpperCase(); });
      listTitle.innerHTML = 'Questions in "' + display + '"';
    } else {
      listTitle.innerHTML = 'All Questions';
    }
  }

  fetch('/index.json')
    .then(function (r) { return r.json(); })
    .then(function (posts) {
      var filtered = posts;

      if (label) {
        filtered = posts.filter(function (p) {
          if (!p.categories) return false;
          return p.categories.some(function (c) {
            /*
             * Fix issue 4: normalize category to lowercase-hyphenated slug
             * "Signal-Integrity" -> "signal-integrity" matches URL slug "signal-integrity"
             * "General-Concepts" -> "general-concepts" matches "general-concepts"
             * "General Concepts" -> "general-concepts" matches "general-concepts"
             */
            var slug = c.toLowerCase().replace(/\s+/g, '-');
            return slug === label;
          });
        });
      }

      if (filtered.length === 0) {
        listEl.innerHTML = '<li style="padding-left:0">No posts found.</li>';
        return;
      }

      listEl.innerHTML = filtered.map(function (p) {
        return '<li><a href="' + p.permalink + '">' + p.title + '</a></li>';
      }).join('');
    })
    .catch(function () {
      listEl.innerHTML = '<li>Could not load posts.</li>';
    });
}

/* ---------- Post ads: load only desktop OR mobile script ---------- */
function loadPostAds() {
  var adContainer = document.getElementById('post-ad-container');
  if (!adContainer) return;

  var isMobile = window.innerWidth <= 768;
  var s = document.createElement('script');
  s.async = true;

  if (!isMobile) {
    s.setAttribute('data-cfasync', 'false');
    s.src = adContainer.dataset.desktopSrc;
  } else {
    window.atOptions = {
      key:    adContainer.dataset.mobileKey,
      format: 'iframe',
      height: 250,
      width:  300,
      params: {}
    };
    s.src = adContainer.dataset.mobileSrc;
  }
  adContainer.appendChild(s);
}

window.addEventListener('load', function () {
  loadPostAds();

  /* Infolinks deferred */
  var infoEl = document.getElementById('infolinks-container');
  if (infoEl) {
    var s = document.createElement('script');
    s.async = true; s.defer = true;
    s.src = 'https://resources.infolinks.com/js/infolinks_main.js';
    infoEl.appendChild(s);
  }

  /* Monetag deferred */
  var monetagEl = document.getElementById('monetag-container');
  if (monetagEl) {
    var ms = document.createElement('script');
    ms.dataset.zone = monetagEl.dataset.zone;
    ms.src = 'https://nap5k.com/tag.min.js';
    monetagEl.appendChild(ms);
  }
});