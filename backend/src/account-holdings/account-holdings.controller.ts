import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountHoldingsService } from './account-holdings.service';
import { CreateAccountHoldingDto } from './dto/create-account-holding.dto';
import { UpdateAccountHoldingDto } from './dto/update-account-holding.dto';

@Controller('account-holdings')
export class AccountHoldingsController {
  constructor(private readonly accountHoldingsService: AccountHoldingsService) {}

  @Post()
  create(@Body() createAccountHoldingDto: CreateAccountHoldingDto) {
    return this.accountHoldingsService.create(createAccountHoldingDto);
  }

  @Get()
  findAll() {
    return this.accountHoldingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountHoldingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountHoldingDto: UpdateAccountHoldingDto) {
    return this.accountHoldingsService.update(+id, updateAccountHoldingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountHoldingsService.remove(+id);
  }
}
