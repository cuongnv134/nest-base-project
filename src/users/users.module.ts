import { Module } from '@nestjs/common';

import { UsersController } from './users.controller';
import { RelationalUserPersistenceModule } from './infrastructure/persistence/relational/relational-persistence.module';
import { UsersService } from './users.service';

// <database-block>
const infrastructurePersistenceModule = RelationalUserPersistenceModule;
// </database-block>

@Module({
  imports: [infrastructurePersistenceModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService, infrastructurePersistenceModule],
})
export class UsersModule {}
