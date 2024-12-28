import { Module } from '@nestjs/common';
// import { EmployeeModule } from './modules/employee/employee.module';
import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { PgConfigModule } from './infrastructures/databases/postgresql/pg.config.module';
import { EmployeeModule } from './modules/employee/employee.module';

@Module({
  imports: [ConfigModule.forRoot(), PgConfigModule, EmployeeModule],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
