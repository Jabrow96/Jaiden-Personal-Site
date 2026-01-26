document.addEventListener('DOMContentLoaded', function () {
  const slides = {
    html: [
      { src: 'img/html1.svg', caption: 'HTML structure' },
      { src: 'img/html2.svg', caption: 'Semantic elements' }
    ],
    css: [
      { src: 'img/css1.svg', caption: 'Box model & layouts' },
      { src: 'img/css2.svg', caption: 'Colors & typography' }
    ],
    js: [
      { src: 'img/js1.svg', caption: 'DOM manipulation' },
      { src: 'img/js2.svg', caption: 'Events & interactivity' }
    ]
  };

  document.querySelectorAll('.skill-card').forEach(card => {
    const key = card.dataset.skill;
    const list = slides[key] || [];
    const preview = card.querySelector('.skill-preview');
    const img = preview.querySelector('.skill-img');
    const caption = preview.querySelector('.skill-caption');
    let idx = 0;
    let timer = null;

    function show(i) {
      const item = list[i];
      if (!item) return;
      img.src = item.src;
      caption.textContent = item.caption;
    }

    function start() {
      if (!list.length) return;
      show(0);
      timer = setInterval(() => {
        idx = (idx + 1) % list.length;
        show(idx);
      }, 1600);
    }

    function stop() {
      if (timer) { clearInterval(timer); timer = null; }
      if (list.length) show(0);
    }

    card.addEventListener('mouseenter', start);
    card.addEventListener('mouseleave', stop);
    card.addEventListener('focusin', start);
    card.addEventListener('focusout', stop);
  });
});
