import { IMG } from '../config'

export const EVENT_IDS = ['wedding', 'concert', 'award', 'graduation', 'launch', 'birthday', 'religious', 'corporate']

// Display names live in i18n under rentals.items.<id>, menu.packages.<id>.
export const RENTAL_CATS = [
  { id: 'chairs', img: IMG.rentals.chairs, items: ['chairs', 'tables', 'sofas'] },
  { id: 'tents', img: IMG.rentals.tents, items: ['tents', 'canopies', 'flooring'] },
  { id: 'stage', img: IMG.rentals.stage, items: ['stage', 'backdrop', 'podium'] },
  { id: 'sound', img: IMG.rentals.sound, items: ['sound', 'lights', 'projector'] },
  { id: 'cooking', img: IMG.rentals.cooking, items: ['pots', 'burners', 'buffet'] },
  { id: 'decor', img: IMG.rentals.decor, items: ['flowers', 'drapes', 'poruwa'] },
  { id: 'crockery', img: IMG.rentals.crockery, items: ['plates', 'cutlery', 'glasses'] },
]

export const PACKAGES = [
  { id: 'silver', img: IMG.food.rice },
  { id: 'gold', img: IMG.food.curry },
  { id: 'premium', img: IMG.food.buffet },
  { id: 'finger', img: IMG.food.shortEats },
  { id: 'tea', img: IMG.food.dessert },
]

// Small photos for the "Popular dishes" collage (Wikimedia Commons); id = menu.dishes.<id>.
export const DISH_PHOTOS = ['kiribath', 'fried', 'chicken', 'fish', 'dhal', 'cutlet', 'watalappan', 'kavum']
  .map((id) => ({ id, src: `/photos/dishes/${id}.jpg` }))

export const MENU_CATS = [
  { id: 'rice', img: IMG.food.rice, items: ['rice', 'yellow', 'kiribath', 'fried'] },
  { id: 'curries', img: IMG.food.curry, items: ['chicken', 'fish', 'dhal', 'veg'] },
  { id: 'shorteats', img: IMG.food.shortEats, items: ['cutlet', 'rolls', 'patties', 'sandwich'] },
  { id: 'desserts', img: IMG.food.dessert, items: ['watalappan', 'curd', 'pudding', 'kavum'] },
]

// Home page "rental kit" groups; id = kit.<id> in i18n, cat = RENTAL_CATS id used for the photo.
export const KIT_GROUPS = [
  { id: 'serve', cat: 'cooking' },
  { id: 'set', cat: 'decor' },
  { id: 'pour', cat: 'crockery' },
  { id: 'shape', cat: 'chairs' },
]
