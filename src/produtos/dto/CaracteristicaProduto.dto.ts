import { IsNotEmpty } from 'class-validator';

export class CaracteristicaProdutoDTO {
  @IsNotEmpty({ message: 'O nome do produto não pode ser vazio.' })
  nome: string;
  @IsNotEmpty({ message: 'O produto deve ter característica definida.' })
  descricao: string;
}
