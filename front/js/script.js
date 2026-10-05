(function () {
  const detailList = Array.from(document.querySelectorAll('details'));

  function openDetailByHash(hash) {
    if (!hash) return;

    const targetId = hash.startsWith('#') ? hash.slice(1) : hash;
    const target = document.getElementById(targetId);

    if (!target || target.tagName !== 'DETAILS') {
      return;
    }

    detailList.forEach(function (detail) {
      detail.open = detail === target;
    });

    target.open = true;

    setTimeout(function () {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      const hash = link.getAttribute('href');
      const target = hash ? document.getElementById(hash.substring(1)) : null;

      if (target && target.tagName === 'DETAILS') {
        event.preventDefault();
        openDetailByHash(hash);
      }
    });
  });

  const navLinks = document.querySelectorAll('.side a');
  navLinks.forEach(function (navLink) {
    navLink.addEventListener('click', function () {
      navLinks.forEach(function (item) {
        item.classList.toggle('active', item === navLink);
      });
    });
  });

  if (window.location.hash) {
    openDetailByHash(window.location.hash);
  }
})();
