import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectDataSource()
    private dataSource: DataSource,
  ) {
    console.log('DataSource connected:', this.dataSource.isInitialized);
  }
  async getEmployeeList(): Promise<any> {
    const queryRunner = this.dataSource.createQueryRunner();
    let result = '';
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      result = await queryRunner.query(
        `SELECT * FROM get_list_last_name_employee(-1,-1)`,
      );
      await queryRunner.commitTransaction();
    } catch (err) {
      console.error('test==', err);
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
    return result;
  }
}
