export enum HttpStatusCode {
  OK = 200,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  INTERNAL_SERVER = 500,
  FORBIDDEN = 403,
  UNAUTORIZED = 401,
}

export class BaseError extends Error {
  public readonly name: string;
  public readonly httpCode: HttpStatusCode;
  public readonly isOperational: boolean;

  constructor(
    name: string,
    httpCode: HttpStatusCode,
    isOperational: boolean,
    description: string
  ) {
    super(description);
    Object.setPrototypeOf(this, new.target.prototype);

    this.name = name;
    this.httpCode = httpCode;
    this.isOperational = isOperational;

    Error.captureStackTrace(this);
  }
}

export class APIError extends BaseError {
  constructor(
    name,
    httpCode = HttpStatusCode.INTERNAL_SERVER,
    isOperational = true,
    description = "internal server error"
  ) {
    super(name, httpCode, isOperational, description);
  }
}
export class HTTP400Error extends BaseError {
  constructor(description) {
    super("BAD REQUEST", HttpStatusCode.BAD_REQUEST, true, description);
  }
}
export class HTTP404Error extends BaseError {
  constructor(description) {
    super("NOT FOUND", HttpStatusCode.NOT_FOUND, true, description);
  }
}

export class HTTP403Error extends BaseError {
  constructor(description) {
    super('FORBIDDEN', HttpStatusCode.FORBIDDEN, true, description)
  }
}
export class HTTP401Error extends BaseError {
  constructor(description) {
    super('UNAUTHORIZED', HttpStatusCode.UNAUTORIZED, true, description)
  }
}