import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuarioRepository {
  private usuarios = [];

  async salvar(usuario): Promise<void> {
    this.usuarios.push(usuario);
  }

  async listar(): Promise<any[]> {
    return this.usuarios;
  }

  async existeEmail(email: string): Promise<boolean> {
    const possivelUsuario = this.usuarios.find(
      (usuario) => usuario.email === email,
    );

    return possivelUsuario !== undefined;
  }
}
