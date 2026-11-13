export const escapeHTML = (value = '') => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function safeURL(value = '') {
  return /^(https?:\/\/|mailto:|#|\/(?!\/))/.test(value) ? value : '#';
}
// Intentionally limited inline Markdown plus the Soundcite span. Other raw HTML is escaped.
export function inline(text = '') {
  // Permit only the Soundcite inline element used by story copy; all other raw
  // HTML remains escaped. Attribute values and its label are escaped below.
  const pattern = /<span class="soundcite" data-url="(https:\/\/[^\"]+)" data-start="(\d+)" data-end="(\d+)" data-plays="(\d+)">([^<]*)<\/span>|\[([^\]]+)\]\(([^\s)]+)\)|\*\*(.+?)\*\*|\*(.+?)\*/g;
  let result = '', start = 0;
  for (const match of text.matchAll(pattern)) {
    result += escapeHTML(text.slice(start, match.index));
    result += match[1] !== undefined
      ? `<span class="soundcite" data-url="${escapeHTML(match[1])}" data-start="${match[2]}" data-end="${match[3]}" data-plays="${match[4]}">${escapeHTML(match[5])}</span>`
      : match[6] !== undefined ? `<a href="${escapeHTML(safeURL(match[7]))}">${inline(match[6])}</a>`
      : match[8] !== undefined ? `<strong>${inline(match[8])}</strong>` : `<em>${inline(match[9])}</em>`;
    start = match.index + match[0].length;
  }
  return result + escapeHTML(text.slice(start));
}
export const asset = (path) => typeof path === 'string' && path.startsWith('/') && !path.startsWith('//') ? `${import.meta.env?.BASE_URL || '/'}${path.slice(1)}` : path;
export function validateStory(story) {
  if (!story.title || !story.authors?.length || !/^\d{4}-\d{2}-\d{2}$/.test(story.date) || Number.isNaN(Date.parse(story.date))) throw new Error('story.js needs title, authors, and an ISO publication date.');
  const image = (value) => { if (!value?.src || !value.alt || !value.width || !value.height) throw new Error('Every image needs src, alt, width, and height.'); };
  if (story.hero?.video) {
    if (!/^(https:\/\/|\/(?!\/))/.test(story.hero.video)) throw new Error('Hero video needs an HTTPS URL or a local absolute path.');
  } else image(story.hero);
  const ids = new Set();
  for (const block of story.blocks) {
    if (!['paragraph','heading','image','quote','video','embed','scrolly','audioCard','addreporting', 'article-body'].includes(block.type)) throw new Error(`Unsupported story block: ${block.type}`);
    if (block.id) { if (ids.has(block.id)) throw new Error(`Duplicate section id: ${block.id}`); ids.add(block.id); }
    if (['paragraph','heading','quote'].includes(block.type) && !block.text) throw new Error(`${block.type} needs text.`);
    if (block.type === 'image') image(block);
    if (['video','embed'].includes(block.type) && (!( /^https:\/\//.test(block.src) || (block.type === 'video' && block.kind === 'native' && /^\/(?!\/)/.test(block.src)) ) || !block.title)) throw new Error('Media needs an HTTPS embed src (or local native video path) and descriptive title.');
    
    if (block.type === 'audioCard') {
  if (!block.id || !block.description || !block.audioSrc || !block.speaker || !block.audioLabel || !block.transcript) throw new Error('Audio cards need id, description, audioSrc, speaker, audioLabel, and transcript.');
  if (block.image && !block.imageAlt) throw new Error('Audio card images need imageAlt text.');
  if (!/^(https:\/\/|\/(?!\/))/.test(block.audioSrc)) throw new Error('Audio sources must be an HTTPS URL or a local absolute path.');
  }


    if (block.type === 'scrolly') {
      if (!block.steps?.length || !block.title) throw new Error('Scrolly sections need a title and steps.');
      for (const step of block.steps) { image(step.image); if (!step.title || !step.text) throw new Error('Each scrolly step needs title and text.'); }
    }
  }
}
