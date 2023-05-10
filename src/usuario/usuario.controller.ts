import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}

  @Post()
  async criaUsuario(@Body() dadosDoUsuario): Promise<any> {
    await this.usuarioRepository.salvar(dadosDoUsuario);
    return dadosDoUsuario;
  }

  @Get()
  async listaUsuarios(): Promise<any[]> {
    return this.usuarioRepository.listar();
  }
}
