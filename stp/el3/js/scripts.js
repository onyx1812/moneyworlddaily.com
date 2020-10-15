(() => {

  const navFooterLinks = document.querySelectorAll('.nav-footer a');
  navFooterLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const
        id = e.target.dataset.popup,
        content = document.getElementById(id).innerHTML;
      document.getElementById('popup-content').innerHTML = content;
      document.getElementById('popup').classList.add('popup-active');
    });
  });

  document.getElementById('popupClose').addEventListener('click', e => {
    e.preventDefault();
    document.getElementById('popup').classList.remove('popup-active');
  });

})();