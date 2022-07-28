import { AgreementModel, AgreementStatus } from '../models/agreement';

export interface Agreement {
  get: () => Promise<Agreement.Model | undefined>;
  post: (offersId: string[]) => Promise<void>;
}

export namespace Agreement {
  export type Model = AgreementModel;
  export type Status = AgreementStatus;
}
