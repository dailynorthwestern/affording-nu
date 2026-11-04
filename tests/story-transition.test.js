import test from 'node:test';
import assert from 'node:assert/strict';
import { introScrollState } from '../src/lib/story-transition.js';

test('hero crossfade completes before the first paragraph appears', () => {
  assert.deepEqual(introScrollState(0, 1000, 3), { fade: 0, active: -1 });
  assert.equal(introScrollState(275, 1000, 3).fade, .5);
  assert.deepEqual(introScrollState(550, 1000, 3), { fade: 1, active: -1 });
  assert.deepEqual(introScrollState(650, 1000, 3), { fade: 1, active: 0 });
});

test('each paragraph gets one screen and the last remains through the exit', () => {
  assert.equal(introScrollState(1649, 1000, 3).active, 0);
  assert.equal(introScrollState(1650, 1000, 3).active, 1);
  assert.equal(introScrollState(2650, 1000, 3).active, 2);
  assert.equal(introScrollState(4000, 1000, 3).active, 2);
});

test('reverse scrolling and mobile sizes select the same relative stages', () => {
  const offsets = [0, 650, 1650, 2650, 1650, 650, 0];
  assert.deepEqual(offsets.map(offset => introScrollState(offset, 1000, 3).active), [-1, 0, 1, 2, 1, 0, -1]);
  assert.deepEqual(introScrollState(990, 600, 3), introScrollState(1650, 1000, 3));
  assert.deepEqual(introScrollState(-600, 600, 3), { fade: 0, active: -1 });
});
