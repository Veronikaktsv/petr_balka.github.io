// const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const headline = document.getElementById('headline');
const button = document.getElementById('listen-button');

hamburger.onclick = function () {
    this.classList.toggle('open');
    nav.classList.toggle('show');
    petr.classList.toggle('hidden');
    
    if (window.getComputedStyle(headline).opacity == 1) { 
        headline.style.opacity = 0;
        button.style.opacity = 0;
    } else {
        headline.style.opacity = 1;
        button.style.opacity = 1;
    }
      
};

const items = document.querySelectorAll('#grid > div');

for (const item of items.values()) {
    
    new Waypoint.Inview({
        element: item,
        enter(direction) {
            if (direction == 'down') {
                item.classList.add('move-up');
            }
        },
        exited(direction) {
            if (direction == 'up') {
                item.classList.remove('move-up');
            }
        }
    });
    
}

(function () {
    
    var color;
    var hue = 0;
    
    function generateColor() {
        color = Snap.hsl(hue, 100, 50);
        hue = (hue + 1) % 360;
        setTimeout(generateColor, 100);
    }
    
    generateColor();
    
    const p1 = document.querySelectorAll('#News p1');
    
    for (const item of p1.values()) {
        
        item.onmouseover = function () {
            this.style.backgroundColor = color;
        };
        
        item.onmouseout = function () {
            this.style.backgroundColor = 'transparent';
        };
        
    }
    
    
    
    
})();

(() => {

    ham.addEventListener('click', () => {
        document.getElementById('ham').classList.toggle('open');
        document.getElementById('nav').classList.toggle('visible');
        document.getElementById('hone').classList.toggle('hidden');
        document.getElementById('btn').classList.toggle('hidden');
    });

    const observerOptions = {
        rootMargin: '1000px 0px 0px 0px',
        threshold: 0.5
    };

    const observe = entries => entries.forEach(entry => {
        entry.target.classList.toggle('inviewport', entry.isIntersecting);
    });

    const obs = new IntersectionObserver(observe, observerOptions);
    document.querySelectorAll('#grid>div').forEach(el => obs.observe(el));
    
})();
