window.addEventListener('resize', () => {
  const navToggle = document.querySelector('input[type="checkbox"]');
  if (window.innerWidth >= 768 && navToggle.checked) {  
    navToggle.checked = false;
  }
});
