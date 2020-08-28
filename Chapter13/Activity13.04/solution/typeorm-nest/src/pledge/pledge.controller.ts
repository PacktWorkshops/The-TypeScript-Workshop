import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DeleteResult } from 'typeorm';

import { Pledge } from './pledge.entity';
import { PledgeService } from './pledge.service';

@Controller('pledge')
export class PledgeController {
  constructor(private readonly pledgeService: PledgeService) {}

  @Delete(':id')
  deletePledge(@Param('id') id: number): Promise<DeleteResult> {
    return this.pledgeService.delete(id);
  }

  @Get()
  getPledges(): Promise<Pledge[]> {
    return this.pledgeService.findAll();
  }

  @Get(':id')
  getPledge(@Param('id') id: number): Promise<Pledge> {
    return this.pledgeService.findOne(id);
  }

  @Post()
  savePledge(@Body() pledge: Pledge): Promise<Pledge> {
    return this.pledgeService.save(pledge);
  }
}
