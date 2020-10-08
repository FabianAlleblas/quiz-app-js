export function getDataName(name) {
  const selector = `[data-name=${name}]`
  return document.querySelector(selector)
}

// export function getModule(name) {
//   const selector = `[data-name=${name}]`
//   return document.querySelector(selector)
// }
