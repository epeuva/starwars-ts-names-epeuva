import { sampleSize } from 'lodash' // It will load all the lodash library when creating bundle. lodash-es with webpack works differently.
import { SW_NAMES } from './sw-names'

const getRandomItem = () => {
  return sampleSize(SW_NAMES, 1)[0]
}

export function random(howMany?: number) {
  if (howMany === undefined) {
    return getRandomItem()
  } else {
    const randomItems = []
    for (let i = 0; i < howMany; i++) {
      randomItems.push(getRandomItem())
    }
    return randomItems
  }
}
