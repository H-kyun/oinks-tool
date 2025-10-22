import { PartialType } from '@nestjs/mapped-types';
import { CreateFinancePriceDto } from './create-finance-price.dto';

export class UpdateFinancePriceDto extends PartialType(CreateFinancePriceDto) {}
