import { Injectable } from '@nestjs/common';
import { CreateUserWalletDto } from './dto/create-user-wallet.dto';
import { UpdateUserWalletDto } from './dto/update-user-wallet.dto';

@Injectable()
export class UserWalletsService {
  create(createUserWalletDto: CreateUserWalletDto) {
    return 'This action adds a new userWallet';
  }

  findAll() {
    return `This action returns all userWallets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userWallet`;
  }

  update(id: number, updateUserWalletDto: UpdateUserWalletDto) {
    return `This action updates a #${id} userWallet`;
  }

  remove(id: number) {
    return `This action removes a #${id} userWallet`;
  }
}
