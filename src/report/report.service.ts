import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReportDTO, Reports } from './report.entity';

@Injectable()
export class ReportService {
    constructor(
        @InjectRepository(Reports)
        private readonly reportRepository: Repository<Reports>
    ) { }

    async createReport(report: ReportDTO) {
        try {
            return this.reportRepository.save(report);
        } catch (e) {
            Promise.reject(e);
        }
    }

    async getAllReports() {
        const reports = await this.reportRepository.createQueryBuilder('report')
            .leftJoinAndSelect('report.post', 'post')
            .leftJoinAndSelect('report.user', 'user')
            .getMany();
        return reports;
    }

    async deleteReport(userId: number, postId: number) {
        const report = await this.reportRepository.findOne({ where: { postId: postId, userId: userId } });
        if (!report) {
            return Promise.reject('Report not found');
        }
        return this.reportRepository.delete(report);
    }
}


