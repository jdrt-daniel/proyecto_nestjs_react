import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param
} from '@nestjs/common';
import { ProveedorService } from './proveedor.service';
import { ProveedorEntity } from './proveedor.entity';

@Controller('/proveedor')
export class ProveedorController {
  constructor(private service: ProveedorService) {}
  @Get()
  list() {
    return this.service.getList();
  }

  @Get(':id')
  get(@Param() params) {
    return this.service.findById(params.id);
  }

  @Post()
  create(@Body() proveedor: ProveedorEntity) {
    return this.service.saveData(proveedor);
  }

  @Put()
  update(@Body() proveedor: ProveedorEntity) {
    return this.service.updateData(proveedor);
  }

  @Delete(':id')
  delete(@Param() params) {
    return this.service.deleteData(params.id);
  }
}
