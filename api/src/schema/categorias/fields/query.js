// Imports
import {GraphQLInt, GraphQLList} from 'graphql'

// App Imports
import CatType from '../type'
import {getAll} from '../resolvers'

// Users All
export const categorias = {
  type: new GraphQLList(CatType),
  resolve: getAll
}