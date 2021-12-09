const cities = ['Buenos Aires', 'Bahia Blanca', 'Cordoba', 'La Plata']

const randomString = () => {
  const string = cities[Math.floor(Math.random() * cities.length)]
  return string
}

const reverseStringWithPromise = str => {
  return new Promise((resolve, reject) => {
    if(!str) reject(Error('Error'))
    resolve(str.split("").reverse().join(""))
  })
}

module.exports = randomString