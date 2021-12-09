const randomString = require('../index')

// describe() permite encerrar un bloque de test y dejar una descripcion para ellos...
describe('Probar funcionalidades de ramdomString', () => {
  test('Probar si ramdomString retorna un string', () => {
    expect(typeof (randomString())).toBe('string')
  })

  test('Comprobar que no existe una ciudad', () => {
    expect(randomString()).not.toMatch('Tierra del fuego')
  })
})