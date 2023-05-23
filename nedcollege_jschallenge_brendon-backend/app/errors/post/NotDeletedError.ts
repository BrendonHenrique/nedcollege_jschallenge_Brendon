class NotDeletedError extends Error {
  constructor(message: string = 'Failed to delete post') {
    super(message)
    console.error(message)
  }
}

export default NotDeletedError
