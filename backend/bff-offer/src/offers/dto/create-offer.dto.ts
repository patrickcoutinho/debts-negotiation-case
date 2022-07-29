export enum DebtType {
  account = 'Conta Corrente',
  creditCard = 'Cartão de Crédito',
  loan = 'Empréstimo',
}

export type InstallmentPlan = {
  installments: number;
  installmentValue: number;
  total: number;
  discount: number;
};

export type ValuesType = {
  original: number;
  actual: number;
};

export class CreateOfferDto {
  id: string;
  date: Date;
  type: DebtType;
  contract: string;
  description: string | null;
  value: ValuesType;
  installmentPlans: InstallmentPlan[];
}
