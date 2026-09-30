(function () {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const loader = document.getElementById('loader');
    const began = performance.now();
    const MIN_TIME = 700;
    const MAX_TIME = 6000;

    let io = null;
    const pending = [];

    const watch = el => io ? io.observe(el) : pending.push(el);

    const mark = (el, delay) => {
        if (!el || el.classList.contains('reveal')) return;
        el.classList.add('reveal');
        el.style.setProperty('--d', delay + 'ms');
        watch(el);
    };

    const markChildren = (parent, step) => {
        [...parent.children].forEach((child, i) => mark(child, Math.min(i, 8) * step));
    };

    const dynamic = el => {
        const run = () => {
            if (!el.children.length) return false;
            markChildren(el, 80);
            return true;
        };
        if (run()) return;
        const mo = new MutationObserver(() => { if (run()) mo.disconnect(); });
        mo.observe(el, { childList: true });
    };

    const DYNAMIC_IDS = ['highlights', 'plans', 'features', 'faqs'];

    const hero = document.querySelector('main .overflow-hidden > section');
    if (hero && hero.children.length > 1) {
        [...hero.children[0].children].forEach((el, i) => mark(el, i * 120));
        mark(hero.children[1], 300);
    }

    document.querySelectorAll('main > section').forEach(section => {
        const wrap = section.firstElementChild;
        if (!wrap) return;
        if (DYNAMIC_IDS.includes(wrap.id)) { dynamic(wrap); return; }
        [...wrap.children].forEach((el, i) => {
            if (DYNAMIC_IDS.includes(el.id)) dynamic(el);
            else mark(el, Math.min(i, 4) * 60);
        });
    });

    document.querySelectorAll('footer .grid > div').forEach((el, i) => mark(el, i * 80));

    const finish = el => {
        el.classList.remove('reveal', 'is-visible');
        el.style.removeProperty('--d');
    };

    const startReveal = () => {
        if (!('IntersectionObserver' in window)) {
            pending.forEach(finish);
            pending.length = 0;
            return;
        }
        io = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                io.unobserve(el);
                el.classList.add('is-visible');
                const delay = parseFloat(el.style.getPropertyValue('--d')) || 0;
                setTimeout(() => finish(el), delay + 900);
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
        pending.forEach(el => io.observe(el));
        pending.length = 0;
    };

    const hide = () => {
        if (!loader || loader.dataset.done) return;
        loader.dataset.done = '1';
        const wait = Math.max(0, MIN_TIME - (performance.now() - began));
        setTimeout(() => {
            loader.classList.add('is-hidden');
            startReveal();
            setTimeout(() => loader.remove(), 700);
        }, wait);
    };

    if (!loader) {
        startReveal();
        return;
    }

    if (document.readyState === 'complete') hide();
    else addEventListener('load', hide);
    setTimeout(hide, MAX_TIME);
})();