import { Test, TestingModule } from '@nestjs/testing';
import { PledgeController } from './pledge.controller';

describe('Pledge Controller', () => {
  let controller: PledgeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PledgeController],
    }).compile();

    controller = module.get<PledgeController>(PledgeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
