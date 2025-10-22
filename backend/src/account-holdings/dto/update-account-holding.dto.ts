import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountHoldingDto } from './create-account-holding.dto';

export class UpdateAccountHoldingDto extends PartialType(CreateAccountHoldingDto) {}
