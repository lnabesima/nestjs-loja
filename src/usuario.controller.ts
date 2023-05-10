import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';

@Controller('/usuarios')
export class UsuarioController {
  private UsuarioRepository: UsuarioRepository = new UsuarioRepository();

  @Post()
  async criaUsuario(@Body() dadosDoUsuario): Promise<any> {
    this.UsuarioRepository.salvar(dadosDoUsuario);
    return dadosDoUsuario;
  }

  @Get()
  async listaUsuarios(): Promise<any[]> {
    return this.UsuarioRepository.listar();
  }
}
