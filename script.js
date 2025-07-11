const numStars = 100;

for (let i = 0; i < numStars; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.top = `${Math.random() * window.innerHeight}px`;
  star.style.left = `${Math.random() * window.innerWidth}px`;
  star.style.animationDuration = `${1 + Math.random() * 2}s`;
  document.body.appendChild(star);
}