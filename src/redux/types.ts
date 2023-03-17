export interface Funcionario {
  idfuncionarios: number;
  nome: string;
  cpf: string;
  data_nascimento: string;
  email: string;
  telefone: string;
  funcao: string;
}

export interface FuncionarioForm {
  nome: string;
  cpf: string;
  data_nascimento: string;
  email: string;
  telefone: string;
  funcao: string;
}

/**
 * State Type
 */
export interface FuncionariosState {
  data: Funcionario[];
  loading: boolean;
  error: boolean;
}
