import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioRepository } from './usuario.repository';
import { IsEmailUniqueValidator } from './validacao/is-email-unique.validator';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioRepository, IsEmailUniqueValidator],
})
export class UsuarioModule {}
