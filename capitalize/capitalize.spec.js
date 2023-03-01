const capitalize = require('./capitalize');

describe('capitalize', () => {
  test('Returns the first letter capitalized', () => {
    expect(capitalize('mercy')).toBe('Mercy');
  });
  test("Doesn't accept none strings", () => {
    expect(capitalize({})).toBe(undefined);
  });
});
