import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { IsEmailUnique } from '../validacao/is-email-unique.validator';

export class CriaUsuarioDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
  nome: string;
  @IsEmail(undefined, { message: `O e-mail informado é inválido.` })
  @IsEmailUnique({ message: 'Já existe usuário com este e-mail.' })
  email: string;
  @MinLength(6, { message: 'A senha precisa ter no mínimo 6 caracteres.' })
  senha: string;
}
