// Imports
import {GraphQLString, GraphQLInt} from 'graphql'

// App Imports
import UserType from '../type'
import UserLoginType from '../../login/type'
import {create,remove} from '../resolvers'

// User Auth
export const userSignup = {
  type: UserLoginType,
  args: {
    usuario: {
      name: 'usuario',
      type: GraphQLString
    },

    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    }
  },
  resolve: create
}

// User remove
export const UserRemove = {
  type: UserType,
  args: {
    id_user: {
      name: 'id_user',
      type: GraphQLInt
    }
  },
  resolve: remove
}
