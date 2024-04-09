import EnumsError from "./EnumsError.js";

export const requiredFields = (payload) => {
  return {
    title: "All fields required",
    got: {
      firstName: payload.firstName,
      lastName: payload.lastName,
      role: payload.role,
      email: payload.email,
      password: payload.password ? "*******" : payload.password,
      age: payload.age,
      cart: payload.cart,
    },
    expected: {
      firstName: "",
      lastName: "",
      role: "",
      email: "",
      password: "",
      age: 0,
      cart: "",
    },
  };
};

export const invalidFields = (got, expected) => {
  return {
    title: "Invalid field",
    got: {
      got,
    },
    expected: {
      expected,
    },
  };
};

export const authError = (code) => {
  switch (code) {
    case EnumsError.AUTH_ERROR.UNAUTHENTICATED:
      return {
        title: "No autenticado",
        message: "Debes estar autenticado para acceder a este recurso.",
      };
    case EnumsError.AUTH_ERROR.UNAUTHORIZED:
      return {
        title: "No autorizado",
        message: "No estás autorizado a acceder a este recurso.",
      };
  }
};

export const dbError = (code) => {
  switch (code) {
    case EnumsError.DB_ERROR.WRONG_CONNECTION:
      return {
        title: "Error en la conexión",
        message: "La conexión a la base de datos falló",
      };
    case EnumsError.DB_ERROR.WRONG_CREDENTIALS:
      return {
        title: "Credenciales incorrectas",
        message: "Las credenciales de la base de datos son incorrectas.",
      };
  }
};

export const routingError = (code) => {
  switch (code) {
    case EnumsError.ROUTING_ERROR.ROUTE_NOT_DEFINED:
      return {
        title: "Ruta no definida",
        message: "La ruta a la que intentas acceder no está definida",
      };
    case EnumsError.ROUTING_ERROR.ROUTE_NOT_FOUND:
      return {
        title: "Ruta no encontrada",
        message: "La ruta a la que intentas acceder no fue encontrada",
      };
  }
};

export const serverError = (code) => {
  switch (code) {
    case EnumsError.SERVER.INTERNAL_ERROR:
      return {
        title: "Error Interno del Servidor",
        message: "Se produjo un error interno del servidor",
      };
    case EnumsError.SERVER.BAD_REQUEST:
      return {
        title: "Solicitud incorrecta",
        message: "La solicitud que hiciste no es válida.",
      };
  }
};
