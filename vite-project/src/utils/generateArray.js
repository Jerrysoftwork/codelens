export function generateArray(size = 20, max = 100) {
  return Array.from({ length: size }, () =>
    Math.floor(Math.random() * max) + 10
  );
}
