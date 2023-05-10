export class UsuarioRepository {
  private usuarios = [];

  async salvar(usuario): Promise<void> {
    this.usuarios.push(usuario);
    console.log(this.usuarios);
  }
}
