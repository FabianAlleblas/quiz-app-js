export function getDataName(name) {
  const selector = `[data-name=${name}]`
  return document.querySelector(selector)
}

export function getAllDataName(name) {
  const selector = `[data-name="${name}"]`
  return document.querySelectorAll(selector)
}
