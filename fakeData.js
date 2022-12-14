module.exports = () => {
    const data = { categories: [] }
    // Create 1000 users
    for (let i = 0; i < 10; i++) {
      data.categories.push({ id: i, name: `Via${i}` })
    }
    return data
}

module.exports = () => {
  const data = { via: [] }
  // Create 1000 users
  for (let i = 0; i < 10; i++) {
    data.via.push({ id: i, category_id: `${i}`, name: `Via My${i}` })
  }
  return data
}