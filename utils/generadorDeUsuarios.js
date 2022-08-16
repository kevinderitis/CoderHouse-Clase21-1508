import faker from 'faker'
faker.locale = 'es'

function generarUsuario(id) {
  return {
    id,
    producto: faker.commerce.productName(),
    email: faker.internet.email(),
    website: faker.internet.url(),
    image: faker.image.avatar(),
  }
}

export { generarUsuario }