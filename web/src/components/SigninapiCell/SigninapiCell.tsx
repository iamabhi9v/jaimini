import type {
  FindSigninapiQuery,
  FindSigninapiQueryVariables,
} from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindSigninapiQuery($id: Int!) {
    signinapi: signin(id: $id) {
      email
      password
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindSigninapiQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  signinapi,
}: CellSuccessProps<FindSigninapiQuery, FindSigninapiQueryVariables>) => {
  return <div>{JSON.stringify(signinapi)}</div>
}
