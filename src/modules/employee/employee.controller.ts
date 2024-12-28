import { Controller, Get } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  async getHello(): Promise<string> {
    return await this.employeeService.getEmployeeList();
  }
}
