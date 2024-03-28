import { getLogger } from "./logger.js";

export const ServerRunning = (port) => {
  const logger = getLogger();
  logger.info(`Server running on ${port}`);
};

export const DBConnected = () => {
  const logger = getLogger();
  logger.info("Conectado a la base de datos");
};

export const DBError = (error) => {
  const logger = getLogger();
  logger.error(`Error en Base de Datos: ${error}`);
};

export const LoggerMessage = (message) => {
  const logger = getLogger();
  logger.warn(message);
};

export const LoggerError = (error) => {
  const logger = getLogger();
  logger.error(error);
};
