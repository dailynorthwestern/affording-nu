import { introScrollState } from '../lib/story-transition.js';

const reduced = matchMedia('(prefers-reduced-motion: reduce)');

document.querySelectorAll('[data-story-intro]').forEach(section => {
  const stage = section.querySelector('.intro-stage');
  const hero = section.querySelector('.intro-hero');
  const panels = [...section.querySelectorAll('[data-intro-panel]')];
  const videos = [...section.querySelectorAll('video')];
  const scrollVideo = section.querySelector('[data-intro-video]');
  const heroVideo = section.querySelector('[data-hero-video]');
  section.classList.add('intro-enhanced');
  let scheduled = false;

  function syncVideo(video, visible) {
    if (!video) return;
    if (document.hidden || reduced.matches || !visible) video.pause();
    else if (video.paused) video.play().catch(() => { /* Autoplay may be blocked; text remains readable. */ });
  }

  function update() {
    scheduled = false;
    const height = stage.clientHeight;
    const header = parseFloat(getComputedStyle(stage).top) || 0;
    const offset = header - section.getBoundingClientRect().top;
    // Crossfade during the first half-screen of scrolling, before text arrives.
    const { fade, active } = introScrollState(offset, height, panels.length);
    hero.style.setProperty('--hero-opacity', String(reduced.matches ? (fade < .5 ? 1 : 0) : 1 - fade));
    hero.classList.toggle('is-dismissed', fade >= 1);
    panels.forEach((panel, index) => panel.classList.toggle('is-active', index === active));
    const visible = offset > -height && offset < section.offsetHeight;
    syncVideo(heroVideo, visible && fade < 1);
    syncVideo(scrollVideo, visible && fade > 0);
  }

  function schedule() {
    if (!scheduled) { scheduled = true; requestAnimationFrame(update); }
  }
  // One frame per scroll event batch keeps the crossfade continuous in both directions.
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule);
  addEventListener('pageshow', schedule);
  reduced.addEventListener('change', schedule);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) videos.forEach(video => video.pause());
    else schedule();
  });
  update();
});
