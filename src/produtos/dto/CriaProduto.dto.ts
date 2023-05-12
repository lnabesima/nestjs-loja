import { CaracteristicaProdutoDTO } from './CaracteristicaProduto.dto';
import { ImagemProdutoDTO } from './ImagemProduto.dto';
import {
  ArrayMinSize,
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsUUID,
  isUUID,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CriaProdutoDTO {
  @IsUUID(4, { message: 'O ID do usuário precisa ser informado.' })
  usuarioId: string;

  @IsNotEmpty({ message: 'O nome do produto não pode ser vazio.' })
  nome: string;
  @IsNumber(
    { maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false },
    { message: 'Por favor insira o preço com 2 casas decimais' },
  )
  @IsPositive({ message: 'O valor precisa ser maior que 0.' })
  valor: number;
  @IsInt()
  @IsPositive({ message: 'O valor precisa ser maior que 0.' })
  quantidadeDisponivel: number;
  @IsNotEmpty({ message: 'A descrição do produto precisa ser informada.' })
  @MaxLength(1000, {
    message:
      'A descrição é muito longa. Ela pode conter no máximo 1000 caracteres.',
  })
  descricao: string;
  @ValidateNested()
  @ArrayMinSize(2, {
    message: 'Precisam ser informadas no mínimo 2 características do produto.',
  })
  @Type(() => CaracteristicaProdutoDTO)
  caracteristicas: CaracteristicaProdutoDTO[];
  @ValidateNested()
  @ArrayMinSize(1, { message: 'Ao menos 1 imagem precisa ser inserida.' })
  @Type(() => ImagemProdutoDTO)
  imagens: ImagemProdutoDTO[];
  @IsNotEmpty({ message: 'A categoria do produto precisa ser informada.' })
  categoria: string;
  @IsDateString({}, { message: 'Por favor, informe uma data.' })
  dataCriacao: string;
  @IsDateString({}, { message: 'Por favor, informe uma data.' })
  dataAtualizacao: string;
}
