// Strings
const text = 'Hola Mundo'
test('Debe contener un text', () => {
  // queremos probar que text hace match con 'Mundo'
  expect(text).toMatch(/Mundo/)
})

// Arrays
const fruits = ['manzana', 'pera', 'banana', 'frutilla'] 
test('Debe contener banana', () => {
  // queremos probar que fruits contiene a 'banana'
  expect(fruits).toContain('banana')
})

// Numbers
const number = 20
test('Debe ser mayor a 15', () => {
  // queremos probar que count es mayor que 15
  expect(number).toBeGreaterThan(15)
})

// Booleans
const boolean = true
test('Debe ser verdadero', () => {
  // queremos probar que count es mayor que 15
  expect(boolean).toBeTruthy()
})

// Callbacks
const reverseString = (str, callback) => callback(str.split("").reverse().join(""))
test('Debe funcionar reverseString', () => {
  // queremos probar que reverseString('hola') es igual a 'aloh'
  reverseString('hola', str => expect(str).toBe('aloh'))
})

// Promises
const reverseStringWithPromise = str => {
  return new Promise((resolve, reject) => {
    if(!str) reject(Error('Error'))
    resolve(str.split("").reverse().join(""))
  })
}

test('Debe funcionar reverseStringWithPromise', () => {
  // queremos probar que reverseString('hola') es igual a 'aloh'
  return reverseStringWithPromise('hola')
    .then(str => expect(str).toBe('aloh'), err => expect(err).toBe('Error'))
})

// Async-Await
test('Debe funcionar reverseStringWithPromise con async-await', async () => {
  // queremos probar que reverseString('hola') es igual a 'aloh'
  const string = await reverseStringWithPromise('hola')
  expect(string).toBe('aloh')
})

// // beforeEach: Correr codigo antes de cada prueba
// beforeEach(() => console.log(`beforeEach`, 'Antes de cada prueba.'))

// // beforeAll: Correr codigo antes de todas las pruebas
// beforeAll(() => console.log(`beforeAll`, 'Antes de todas las pruebas.'))

// // afterEach: Correr codigo despues de cada prueba
// afterEach(() => console.log(`afterEach`, 'Despues de cada prueba.'))

// // afterAll: Correr codigo despues de todas las pruebas
// afterAll(() => console.log(`afterAll`, 'Despues de todas las pruebas.'))