class Conflict extends Error {
  constructor(message) {
    super(message);
    this.status = 409;
    this.message = message;
  }
}

module.exports = Conflict;
