export default {
  async index (endPoint) {
    console.log('index')
  },

  async show (endPoint, id) {
    console.log('show')
  },

  async store (endPoint, object) {
    console.log(endPoint)
    console.log(object)
  },

  async put (endPoint, object, id) {
    console.log(endPoint)
    console.log(object)
    console.log(id)
  },

  async destroy (endPoint, id) {
    console.log(endPoint)
    console.log(id)
  }
}
