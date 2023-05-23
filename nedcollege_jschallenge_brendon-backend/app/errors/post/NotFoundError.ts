class NotFoundError extends Error {
  constructor(message: string = 'Failed to found post') {
    super(message)
    console.error(message)
  }
}

export default NotFoundError
