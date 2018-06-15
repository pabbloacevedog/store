// Imports
import {GraphQLInt, GraphQLList} from 'graphql'

// App Imports
import UserType from '../type'
import {getAll, getById} from '../resolvers'

// Users All
export const users = {
  type: new GraphQLList(UserType),
  resolve: getAll
}

// user By ID
export const user = {
  type: UserType,
  args: {
    id_user: {
      type: GraphQLInt
    }
  },
  resolve: getById
}
