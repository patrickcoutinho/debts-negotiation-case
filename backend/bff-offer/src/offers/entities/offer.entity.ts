import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { DebtType, InstallmentPlan } from '../dto/create-offer.dto';

export type OfferDocument = Offer & Document;

@Schema()
export class ValuesType {
  original: number;
  actual: number;
}

@Schema()
export class Offer {
  @Prop()
  id: string;

  @Prop({ default: new Date() })
  date: Date;

  @Prop()
  type: DebtType;

  @Prop()
  contract: string;

  @Prop()
  description: string | null;

  @Prop({ required: true })
  value: ValuesType;

  @Prop()
  installmentPlans: InstallmentPlan[];
}

export const OfferSchema = SchemaFactory.createForClass(Offer);
