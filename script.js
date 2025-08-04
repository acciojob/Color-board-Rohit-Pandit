function getRandomColor() {
      const colors = [
        '#FF5252','#FFB142','#51E898','#4DD0E1',
        '#8775FF','#F3A183','#FF61A6','#FFD43B'
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }

  const board = document.getElementById('board');
    for (let i = 0; i < 800; i++) {
      const sq = document.createElement('div');
      sq.className = 'square';

      // Hover effect with delayed fade-out
      sq.addEventListener('mouseenter', function() {
        const orig = sq.style.backgroundColor;
        const color = getRandomColor();
        sq.style.backgroundColor = color;
        // Remove/reset color after 1s
        clearTimeout(sq._timer);
        sq._timer = setTimeout(function() {
          sq.style.backgroundColor = 'rgba(255,255,255,0.08)';
        }, 1000);
      });

      board.appendChild(sq);
    }