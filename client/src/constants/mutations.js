import gql from 'graphql-tag'

export const CREATE_USER_MUTATION = gql`
    mutation userSignup (
    $username: String!,
    $email: String!,
    $password:String!,
    $categoria:Int!
    ) {
      userSignup(
      usuario:$username,
      email: $email,
      password:$password,
      id_categoria:$categoria
      ) {
        token
      }
    }
`
