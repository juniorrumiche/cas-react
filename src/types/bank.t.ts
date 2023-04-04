export interface BankProps {
  cod_banco: number;
  name_banco: string;
  person_banco: string;
  telf_person_banco: string;
  email_banco: string;
  id: number;
  cod_banco_corredor: number;
  create_at: string;
}

export interface BankState {
  bank?: Array<BankProps>;
}
