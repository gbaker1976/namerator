const adjectives = [
  'nice',
  'portly',
  'erudite',
  'scant',
  'rhetorical',
  'unencumbered',
  'dastardly',
  'comprehensive',
  'lumbering',
  'snappy',
  'drippy',
  'empowered',
  'beleaguered',
  'spiffy',
	'atomic',
  'famished',
  'angry',
  'inspired',
  'lofty',
  'humiliated',
  'reflective',
  'mindful',
  'compassionate',
  'refined',
  'flatulent',
  'sweaty'
]

const nouns = [
  'dolphin',
  'ermine',
  'astronaut',
  'kingfisher',
  'daffodil',
  'robot',
  'rhotodendron',
  'armature',
  'kaleidoscope',
  'lamp',
  'watermelon',
  'hedgehog',
  'cantaloupe',
  'emu',
  'yolk',
  'phalange',
  'hole',
  'cyclist',
  'philosopher',
  'reverend',
  'gopher',
  'houseplant',
  'scaffold',
  'undertaker',
  'lemon',
  'lumberjack',
  'corpuscle'
]

const getRandom = (arr) => {
	return arr[Math.floor(Math.random() * Math.floor(arr.length))]
}

const makeName = () => {
	return `${getRandom(adjectives)}-${getRandom(nouns)}`
}

module.exports = makeName
