class InternalError extends Error {
  constructor(message: string = 'Internal server error') {
    super(message)
    console.error(message)
  }
}

export default InternalError
