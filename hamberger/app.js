document.addEventListener('DOMContentLoaded', function() {
    var dmshowButtons = document.querySelectorAll('.dmshow');
    var dmsearchButton = document.querySelector('.dmsearch');
    var searchCloseButton = document.querySelector('.searchClose');
    var fsSearchPanel = document.querySelector('.fs-searchpanel');
    var sshElements = document.querySelectorAll('.ssh');
  
    dmshowButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        var icon = button.querySelector('i');
        var span = button.querySelector('span');
  
        if (icon.classList.contains('fa-bars1')) {
          document.getElementById('menuContainer').style.display = 'block';
          sshElements.forEach(function(element) {
            element.classList.remove('animated', 'fadeIn', 'faster');
            element.classList.add('animated', 'fadeOut', 'faster');
          });
          icon.classList.remove('fa-bars1');
          icon.classList.add('fa-times1');
          span.textContent = 'Close';
        } else {
          document.getElementById('menuContainer').style.display = 'none';
          sshElements.forEach(function(element) {
            element.classList.remove('animated', 'fadeOut', 'faster');
            element.classList.add('animated', 'fadeIn', 'faster');
          });
          icon.classList.remove('fa-times1');
          icon.classList.add('fa-bars1');
          span.textContent = 'Menu';
        }
      });
    });
  
    dmsearchButton.addEventListener('click', function() {
      fsSearchPanel.style.display = 'block';
      fsSearchPanel.classList.remove('animated', 'fadeOutUp', 'faster');
      fsSearchPanel.classList.add('animated', 'fadeInDown', 'faster');
      searchCloseButton.style.display = 'block';
      sshElements.forEach(function(element) {
        element.style.display = 'none';
      });
    });
  
    searchCloseButton.addEventListener('click', function() {
      sshElements.forEach(function(element) {
        element.style.display = 'block';
      });
      fsSearchPanel.classList.remove('animated', 'fadeInDown', 'faster');
      fsSearchPanel.classList.add('animated', 'fadeOutUp', 'faster');
      searchCloseButton.style.display = 'none';
    });
  });
  