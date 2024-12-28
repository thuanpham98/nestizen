import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
// import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  // imports: [TypeOrmModule.forFeature()],
  providers: [EmployeeService],
  exports: [EmployeeService],
  controllers: [EmployeeController],
})
export class EmployeeModule {}
