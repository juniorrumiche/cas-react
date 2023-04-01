export interface BuymanProps {
  cod_comprador?: number;
  dni_comprador?: number;
  name_comprador?: string;
  telf_comprador?: number;
  email_comprador?: string;
  birthdate_comprador?: string;
  history?: string;
  importOriginal?: number;
  IngreBruto?: number;
  cod_banco?: number;
  id?: number;
  create_at?: string;
}

export interface BuymanState {
  buyman?: Array<BuymanProps>;
}
