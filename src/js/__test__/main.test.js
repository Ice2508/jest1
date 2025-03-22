import displayHealthStatus from '../main.js'

test('should return "healthy" when health is greater than 50', () => {
  const player = { name: 'Маг', health: 90 };
  expect(displayHealthStatus(player)).toBe('healthy');
});

test('should return "wounded" when health is between 15 and 50', () => {
  const player = { name: 'Маг', health: 30 };
  expect(displayHealthStatus(player)).toBe('wounded');
});

test('should return "critical" when health is 14 or lower', () => {
  const player = { name: 'Маг', health: 10 };
  expect(displayHealthStatus(player)).toBe('critical');
});
