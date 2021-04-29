export const generateSequentialId = (initNumber = 0) => {
  let i = initNumber

  // eslint-disable-next-line no-return-assign
  const id = () => (i += 1)

  return {
    id,
  }
}
