export class CustomError {
  static create({
    name = "Algo salió mal",
    cause,
    idx = 5,
    message = "Error interno del servidor",
    code = 50,
  }) {
    const error = new Error(message);
    error.name = name;
    error.cause = cause;
    error.idx = idx;
    error.code = code;
    throw error;
  }
}
