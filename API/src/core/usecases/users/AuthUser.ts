import { UserRepository } from "../../repositories/UserRepository";
import { gerarToken } from "../../../shared/helpers/jwt";
import bcrypt from 'bcrypt';

interface IAuthInput {
    email: string,
    password: string
}

export class AuthUser{
    constructor(private userRepository: UserRepository) {}

    async execute({email, password}: IAuthInput): Promise<String>{
        const user = await this.userRepository.findByEmail(email);

        if(!user ){
            throw new Error("credenciais inválidas")
        }
        const comparePassword = await bcrypt.compare(password, user.password);

        if(!comparePassword){
            throw new Error("credenciais inválidas")
        }

        const token = gerarToken({userId: user.id, email: user.email});

        return token

    }
}