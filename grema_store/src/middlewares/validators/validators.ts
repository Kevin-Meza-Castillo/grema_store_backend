import { NextFunction, Request, Response } from "express";
import { error } from "console";
import { validationResult } from "express-validator";
import { ResquestValidationError } from "../../network/errors/request-validation-error";

export const isValidated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new ResquestValidationError(errors.array());
  }
  return next();
};

export const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    
    return next();
  } catch (error) {}
};

export const isValidateParams = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("Sirve para verificar los parametros de la consulta");
    return next();
  } catch (error) {}
};
