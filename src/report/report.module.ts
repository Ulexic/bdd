import { Module } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { Reports } from './report.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Reports])],
    controllers: [ReportController],
    providers: [ReportService]
})
export class ReportModule { }
