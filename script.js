// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Dark Mode Toggle
  const toggleButton = document.createElement('button');
  toggleButton.textContent = 'Toggle Dark Mode';
  toggleButton.style.position = 'fixed';
  toggleButton.style.bottom = '20px';
  toggleButton.style.right = '20px';
  toggleButton.style.padding = '10px 20px';
  toggleButton.style.fontSize = '16px';
  toggleButton.style.backgroundColor = '#3b5998';
  toggleButton.style.color = '#fff';
  toggleButton.style.border = 'none';
  toggleButton.style.cursor = 'pointer';
  document.body.appendChild(toggleButton);
  
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.hero').classList.toggle('dark-mode');
    document.querySelector('.projects').classList.toggle('dark-mode');
    document.querySelector('.contact').classList.toggle('dark-mode');
  });
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.hero').classList.toggle('dark-mode');
    document.querySelector('.projects').classList.toggle('dark-mode');
    document.querySelector('.contact').classList.toggle('dark-mode');
  
    // Update each .project card
    document.querySelectorAll('.project').forEach(project => {
      project.classList.toggle('dark-mode');
    });
  });
  