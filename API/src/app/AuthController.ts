import { Request, Response } from "express";
import { AuthUser } from "../core/usecases/users/AuthUser";
import { userRepository } from "../infra/database/users/mongoUserRepository";

export default class AuthController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    try {
      const authUser = new AuthUser(userRepository);
      const token = await authUser.execute({ email, password });
      return res.status(200).json({ token });
    } catch (error: any) {
      return res.status(401).json({ error: error.message });
    }
  }
}


/*
import { AuthUser } from "../../src/core/usecases/users/AuthUser";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export class AuthUser {
  constructor(private userRepository: any) {}

  async execute({ email, password }: { email: string; password: string }): Promise<string> {
    const user = await this.userRepository.findByEmail(email);

    if (!user || !await bcrypt.compare(password, user.password)) {
      throw new Error('Credenciais inválidas');
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: '1d' }
    );

    return token;
  }
}*/
