export const createError = (status, message) => {
  const error = new Error()
  error.status = status
  error.message = message
  console.log(error.message)
  return error
}
