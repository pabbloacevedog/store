// Imports
import {GraphQLObjectType, GraphQLString, GraphQLInt} from 'graphql'

import UserType from '../users/type'

// User Login type
const UserLoginType = new GraphQLObjectType({
  name: 'userAuth',
  description: 'Autentincación de usuario',

  fields: () => ({
    user: { type: UserType },
    token: { type: GraphQLString }
  })
})

export default UserLoginType
