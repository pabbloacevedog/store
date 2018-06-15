// App Imports
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import config from '../../config/config'
import models from '../../models'

// Get users by ID
export async function getById(parentValue, {id_user}) {
	return await models.User.findOne({where: {id_user}})
}

// Get all users
export async function getAll() {
	return await models.User.findAll()
}

// Delete user
export async function remove(parentValue, {id_user}) {
	return await models.User.destroy({where: {id_user}})
}

// Create user
export async function create(parentValue, { usuario, email, password }) {
	// Users exists with same email check
	const user = await models.User.findOne({ where: { email } })

	if (!user) {
		// User no existe
		const passwordHashed = await bcrypt.hash(password, config.saltRounds)

		await models.User.create({
			usuario,
			email,
			password: passwordHashed,
			id_categoria
		})
		const user = await models.User.findOne({ where: { email } })
		const userDetails = user.get()
		const userDetailsToken = {
			id_user: userDetails.id_user,
			usuario: userDetails.usuario,
			email: userDetails.email
		}
		return {
			user: userDetails,
			token: jwt.sign(userDetailsToken, config.secret)
		}

	} 
	else {
		// User existe
		throw new Error(`El email ${ email } ya esta registrado. Intenta iniciar sesión.`)
	}
}
