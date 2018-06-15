// App Imports
import models from '../../models'

// Get all users
export async function getAll() {
  return await models.Cat.findAll()
}
