class NotUpdatedError extends Error {
  constructor(message: string = 'Failed to update post') {
    super(message)
    console.error(message)
  }
}

export default NotUpdatedError
