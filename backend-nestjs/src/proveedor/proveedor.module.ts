import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProveedorController } from './proveedor.controller';
import { ProveedorEntity } from './proveedor.entity';
import { ProveedorService } from './proveedor.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProveedorEntity])],
  providers: [ProveedorService],
  controllers: [ProveedorController]
})
export class ProveedorModule {}
