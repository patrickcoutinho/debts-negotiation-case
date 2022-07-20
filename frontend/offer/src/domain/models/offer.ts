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

export type OfferModel = {
  value: {
    original: number;
    actual: number;
  };
  date: Date;
  contact: string;
  type: DebtType;
  description: string | null;
  installmentPlans: InstallmentPlan[];
};
