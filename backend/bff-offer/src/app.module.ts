import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OffersModule } from './offers/offers.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI), OffersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
