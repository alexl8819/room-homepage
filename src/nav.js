window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {  
    const navInput = document.querySelector('input[type="checkbox"]');
    if (navInput.checked) {
      navInput.checked = false;
    }
  }
});
