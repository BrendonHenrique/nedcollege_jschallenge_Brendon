class NotCreatedError extends Error {
  constructor(message: string = 'Failed to create post') {
    super(message)
    console.error(message)
  }
}

export default NotCreatedError
