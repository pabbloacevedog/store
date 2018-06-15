// App Imports
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import models from '../../models'
import config from '../../config/config'

//login
export async function login(parentValue, { email, password }) {
  const user = await models.User.findOne({ where: { email } })

  if (!user) {
    // User does not exists
    throw new Error(`No tenemos ningún usuario registrado con el email ${ email }. Por favor regístrese.`)
  } else {
    const userDetails = user.get()
    const userDetailsToken = {
      id_user: userDetails.id_user,
      usuario: userDetails.usuario,
      email: userDetails.email
    }

    // User exists
    const passwordMatch = await bcrypt.compare(password, userDetails.password)

    if (!passwordMatch) {
      // Incorrect password
      console.log(passwordMatch)
      throw new Error(`Lo sentimos, la contraseña que ingresaste es incorrecta. Inténtalo de nuevo.`)
    } else {
      console.log(userDetails)
      return {
        user: userDetails,
        token: jwt.sign(userDetailsToken, config.secret)
      }
    }
  }
}

