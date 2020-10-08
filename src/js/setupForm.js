import { getDataName } from './lib'

export default function setupForm() {
  const resetButton = getDataName('reset-btn')
  const form = getDataName('form')

  resetButton.addEventListener('click', () => form.reset())
}
