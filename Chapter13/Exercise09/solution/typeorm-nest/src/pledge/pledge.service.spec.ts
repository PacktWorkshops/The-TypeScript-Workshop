import { Test, TestingModule } from '@nestjs/testing';
import { PledgeService } from './pledge.service';

describe('PledgeService', () => {
  let service: PledgeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PledgeService],
    }).compile();

    service = module.get<PledgeService>(PledgeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
