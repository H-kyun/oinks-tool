import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserWalletsService } from './user-wallets.service';
import { CreateUserWalletDto } from './dto/create-user-wallet.dto';
import { UpdateUserWalletDto } from './dto/update-user-wallet.dto';

@Controller('user-wallets')
export class UserWalletsController {
  constructor(private readonly userWalletsService: UserWalletsService) {}

  @Post()
  create(@Body() createUserWalletDto: CreateUserWalletDto) {
    return this.userWalletsService.create(createUserWalletDto);
  }

  @Get()
  findAll() {
    return this.userWalletsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userWalletsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserWalletDto: UpdateUserWalletDto) {
    return this.userWalletsService.update(+id, updateUserWalletDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userWalletsService.remove(+id);
  }
}
