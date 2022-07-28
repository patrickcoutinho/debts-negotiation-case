import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { Offer, OfferDocument } from './entities/offer.entity';

@Injectable()
export class OffersService {
  constructor(
    @InjectModel(Offer.name) private userModel: Model<OfferDocument>,
  ) {}

  create(createOfferDto: CreateOfferDto) {
    const offer = new this.userModel(createOfferDto);
    return offer.save();
  }

  findAll() {
    return this.userModel.find();
  }

  findOne(id: string) {
    return this.userModel.findById(id);
  }

  update(id: string, updateOfferDto: UpdateOfferDto) {
    return this.userModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateOfferDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.userModel.deleteOne({
      _id: id,
    });
  }
}
