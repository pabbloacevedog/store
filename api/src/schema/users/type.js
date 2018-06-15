// Imports
import {GraphQLObjectType, GraphQLString, GraphQLInt} from 'graphql'

// User type
const UserType = new GraphQLObjectType({
  name: 'user',
  description: '...',

  fields: () => ({
    id_user: {type: GraphQLInt},
    usuario: {type: GraphQLString},
    email: {type: GraphQLString},
    password: {type: GraphQLString}
  })
})

export default UserType
