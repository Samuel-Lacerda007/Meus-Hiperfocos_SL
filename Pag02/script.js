document.addEventListener("DOMContentLoaded", () => {
  
  const elementos = document.querySelectorAll('.escondido') ;

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      
      if (entry.isIntersecting) {
        entry.target.classList.add('visivel');
        observer.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 0.50 
  });

  elementos.forEach(elemento => {
    observer.observe(elemento);
  });
});