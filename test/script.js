const googleDatabase = [
  'cats.com',
  'souprecipes.com',
  'flowers.com',
  'animals.com',
  'catpictures.com',
  'myfavoritecats.com'
]

const googleSearch = (searchInput, db) => {
  const matches = db.filter(item => item.includes(searchInput))

  return matches.length > 3 ? matches.slice(0, 3) : matches
}

googleSearch('cat', googleDatabase)

module.exports = googleSearch