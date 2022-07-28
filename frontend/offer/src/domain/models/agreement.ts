import { InstallmentPlan, OfferModel } from './offer';

export enum AgreementStatus {
  simulation = 'Simulação',
  pending = 'Pendente',
  paid = 'Pago',
}

export type AgreementModel = {
  id: string;
  createdDate: Date;
  installmentsPlan: InstallmentPlan[];
  dueDate: Date[];
  offers: OfferModel[];
  status: AgreementStatus;
  acceptanceDate?: Date;
};
