export const throwIfUnauthorized = ({ response }) => {
  if (response && response.status === 401) {
    throw new Error('Unauthorized')
  }
}
