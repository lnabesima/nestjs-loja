export class UsuarioRepository {
  private usuarios = [];

  async salvar(usuario): Promise<void> {
    this.usuarios.push(usuario);
  }

  async listar(): Promise<any[]> {
    return this.usuarios;
  }
}
