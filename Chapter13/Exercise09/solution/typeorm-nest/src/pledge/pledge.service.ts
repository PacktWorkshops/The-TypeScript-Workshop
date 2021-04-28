import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

import { Pledge } from './pledge.entity';

@Injectable()
export class PledgeService {
  constructor(
    @InjectRepository(Pledge)
    private pledgeRepository: Repository<Pledge>,
  ) {}

  delete(id: number): Promise<DeleteResult> {
    return this.pledgeRepository.delete(id);
  }

  findAll(): Promise<Pledge[]> {
    return this.pledgeRepository.find();
  }

  findOne(id: number): Promise<Pledge> {
    return this.pledgeRepository.findOne(id);
  }

  save(pledge: Pledge): Promise<Pledge> {
    return this.pledgeRepository.save(pledge);
  }
}
