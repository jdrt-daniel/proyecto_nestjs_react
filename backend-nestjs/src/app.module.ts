import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProveedorModule } from './proveedor/proveedor.module';
import { RolModule } from './rol/rol.module';
import { MaterialModule } from './material/material.module';
import { UnidadModule } from './unidad/unidad.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'inventario',
      autoLoadEntities: true
    }),
    ProveedorModule,
    RolModule,
    MaterialModule,
    UnidadModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
