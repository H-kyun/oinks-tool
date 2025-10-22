import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AccountsModule } from './accounts/accounts.module';
import { BudgetCategoriesModule } from './budget-categories/budget-categories.module';
import { BudgetRecordsModule } from './budget-records/budget-records.module';
import { AccountHoldingsModule } from './account-holdings/account-holdings.module';
import { CardStatementsModule } from './card-statements/card-statements.module';
import { RecurringBudgetsModule } from './recurring-budgets/recurring-budgets.module';
import { SchedulesCategoriesModule } from './schedules-categories/schedules-categories.module';
import { CalendarSchedulesModule } from './calendar-schedules/calendar-schedules.module';
import { FinanceInstrumentsModule } from './finance-instruments/finance-instruments.module';
import { FinanceRecordsModule } from './finance-records/finance-records.module';
import { FinancePositionsModule } from './finance-positions/finance-positions.module';
import { FinancePricesModule } from './finance-prices/finance-prices.module';
import { UserWalletsModule } from './user-wallets/user-wallets.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
    }),
    PrismaModule,
    UsersModule,
    AccountsModule,
    BudgetCategoriesModule,
    BudgetRecordsModule,
    AccountHoldingsModule,
    CardStatementsModule,
    RecurringBudgetsModule,
    SchedulesCategoriesModule,
    CalendarSchedulesModule,
    FinanceInstrumentsModule,
    FinanceRecordsModule,
    FinancePositionsModule,
    FinancePricesModule,
    UserWalletsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
