// Pure scroll state shared by the intro controller and its boundary tests.
export function introScrollState(offset, viewportHeight, paragraphCount) {
  const height = Math.max(1, viewportHeight);
  const fade = Math.max(0, Math.min(1, offset / (height * .55)));
  const active = offset < height * .65 || paragraphCount < 1
    ? -1
    : Math.min(paragraphCount - 1, Math.floor((offset - height * .65) / height));
  return { fade, active };
}
