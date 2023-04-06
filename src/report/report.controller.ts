import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Res } from '@nestjs/common';
import { ReportDTO } from './report.entity';
import { ReportService } from './report.service';

@Controller('report')
export class ReportController {
    constructor(private readonly reportService: ReportService) { }

    @Post()
    async createReport(
        @Res() res,
        @Body() body: ReportDTO
    ) {
        try {
            await this.reportService.createReport(body);
            return res.status(201).send();
        } catch (error) {
            return Promise.reject(error);
        }
    }

    @Get('/all')
    async getAllReports(
        @Res() res
    ) {
        try {
            const reports = await this.reportService.getAllReports();
            return res.status(200).send(reports);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    @Delete('/user/:userId/post/:postId')
    async deleteReport(
        @Res() res,
        @Param('userId', ParseIntPipe) userId: number,
        @Param('postId', ParseIntPipe) postId: number
    ) {
        try {
            await this.reportService.deleteReport(userId, postId);
            return res.status(200).send();
        } catch (error) {
            return Promise.reject(error);
        }
    }
}
