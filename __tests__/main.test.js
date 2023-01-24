import {getRandomColor,extractValues} from '../src/main'

it('returns a random color in RGB format', () => {
  const color = getRandomColor();
  expect(color).toMatch(/^rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)$/);
});

it('extracts a number from a table cell', () => {
  const cell = document.createElement('td');
  cell.innerHTML = '1,234';
  const value = extractValues(cell);
  expect(value).toBe(1234);
});