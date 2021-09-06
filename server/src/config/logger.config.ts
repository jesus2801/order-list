import { createLogger, transports, format } from 'winston';
import path from 'path';

const { combine, printf, label, timestamp, colorize } = format;

/**
 * Variable that stores the logger format
 * @category logger
 */
const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

/**
 * Logger for information, only prints on console
 * @category logger
 */
const infoLogger = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'LOG', message: true }),
    colorize(),
    timestamp(),
    myFormat,
  ),
  transports: [new transports.Console()],
});

/**
 * Logger for errors, it prints on console and write on the errors.log file
 * @category logger
 */
const errorLogger = createLogger({
  level: 'error',
  format: combine(
    label({ label: 'ERR', message: true }),
    colorize(),
    timestamp(),
    myFormat,
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: path.join(__dirname, '../../errors.log') }),
  ],
});

/**
 * Logger for alerts, it prints on console and write on the errors.log file
 * @category logger
 */
const warningLogger = createLogger({
  level: 'warn',
  format: combine(
    label({ label: 'WARN', message: true }),
    colorize(),
    timestamp(),
    myFormat,
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: path.join(__dirname, '../../errors.log') }),
  ],
});

/**
 * Main logger class of the app, for print errors, information and alerts
 * @category logger
 */
class AppLogger {
  public error(message: string) {
    errorLogger.error(message);
  }

  public info(message: string) {
    infoLogger.info(message);
  }

  public warning(message: string) {
    warningLogger.warn(message);
  }
}

export const logger = new AppLogger();
