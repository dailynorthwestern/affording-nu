const reduced = matchMedia('(prefers-reduced-motion: reduce)');

document.querySelectorAll('[data-story-intro]').forEach(section => {
  const stage = section.querySelector('.intro-stage');
  const panels = [...section.querySelectorAll('[data-intro-panel]')];
  const alternateMedia = [...section.querySelectorAll('[data-media-panel]')];
  const videos = [...section.querySelectorAll('video')];
  const scrollVideo = section.querySelector('[data-intro-video]');
  const soundToggle = section.querySelector('[data-intro-sound]');
  section.classList.add('intro-enhanced');
  let scheduled = false;

  soundToggle?.addEventListener('click', () => {
    scrollVideo.muted = !scrollVideo.muted;
    soundToggle.setAttribute('aria-label', scrollVideo.muted ? 'Turn sound on' : 'Turn sound off');
    soundToggle.setAttribute('aria-pressed', String(!scrollVideo.muted));
    if (!scrollVideo.muted) scrollVideo.play().catch(() => { /* Audio starts after browser permission or another user action. */ });
  });

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
    const active = Math.max(0, Math.min(panels.length - 1, Math.floor(Math.max(0, offset) / height)));
    section.dataset.activePanel = String(active);
    panels.forEach((panel, index) => panel.classList.toggle('is-active', index === active));
    const selectedMedia = alternateMedia
      .filter(media => Number(media.dataset.mediaPanel) <= active)
      .at(-1);
    alternateMedia.forEach(media => media.classList.toggle('is-active', media === selectedMedia));
    const visible = offset > -height && offset < section.offsetHeight;
    syncVideo(scrollVideo, visible);
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

const fencingIntro = document.querySelector('.story-intro-fencing');
if (fencingIntro) {
  const fencingObserver = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      fencingIntro.classList.add('is-visible');
      fencingObserver.disconnect();
    }
  }, { threshold: 0.1 });
  fencingObserver.observe(fencingIntro);
}
