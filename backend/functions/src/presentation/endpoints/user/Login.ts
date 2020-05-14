import { Request, Response } from "express";
import { LoginUC } from "../../../business/usecases/users/LoginUseCase";
import { UserDB } from "../../../database/userDB";


export const loginEndpoint = async (req: Request, res: Response) => {
  try {
    const loginUC = new LoginUC(new UserDB());

    const result = await loginUC.execute({
      email: req.body.email,
      password: req.body.password
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      message: err.message,
      ...err
    });
  }
};
  