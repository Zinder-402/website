document.querySelectorAll('a[href="#top"]').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
});

if (window.location.hash === "#top") {
  history.replaceState(null, null, window.location.pathname + window.location.search);
}