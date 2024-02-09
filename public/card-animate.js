document.addEventListener('DOMContentLoaded', function () {
    const cursorContainers = document.querySelectorAll(".cursor-container");
    const cursors = document.querySelectorAll(".cursor");
  
    cursorContainers.forEach(function (cursorContainer, index) {
        hideCursor(index);


      cursorContainer.addEventListener('mouseenter', function () {
        showCursor(index);
      });
  
      cursorContainer.addEventListener('mousemove', function (e) {
        const x = e.clientX - cursorContainer.getBoundingClientRect().left;
        const y = e.clientY - cursorContainer.getBoundingClientRect().top;
  
        updateCursorPosition(index, x, y);
      });
  
      cursorContainer.addEventListener('mouseleave', function () {
        hideCursor(index);
      });
    });
  
    function showCursor(index) {
      cursors[index].style.display = 'flex';
      cursors[index].style.transition = 'transform 0.5s ease-in-out';
      cursors[index].style.transform = 'scale(1)';
    }
  
    function updateCursorPosition(index, x, y) {
      cursors[index].style.display = 'flex';
      cursors[index].style.transition = 'transform 0.1s ease-in-out';
      cursors[index].style.transform = `translate(${x}px, ${y}px)`;
    }
  
    function hideCursor(index) {
      cursors[index].style.transition = 'transform 0.5s ease-in-out';
      cursors[index].style.transform = 'scale(0)';
      setTimeout(() => {
        cursors[index].style.display = 'none';
        cursors[index].style.transform = 'scale(1)';
      }, 500);
    }
  });
  