export function url(urlImage) {
  return new URL(`/src/assets/${urlImage}`, import.meta.url)
}
