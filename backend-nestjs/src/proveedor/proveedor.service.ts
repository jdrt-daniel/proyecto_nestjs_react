import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProveedorEntity } from './proveedor.entity';
import { ProveedorRepository } from './proveedor.repository';
@Injectable()
export class ProveedorService {
  constructor(
    @InjectRepository(ProveedorEntity)
    private proveedorRepository: ProveedorRepository
  ) {}

  async getList(): Promise<ProveedorEntity[]> {
    const list = await this.proveedorRepository.find();
    if (!list.length) {
      throw new NotFoundException({ message: 'no data list' });
    }
    return list;
  }

  async findById(id: number): Promise<ProveedorEntity> {
    const data = await this.proveedorRepository.findOne({
      where: [{ id: id }]
    });
    if (!data) {
      throw new NotFoundException({ message: 'no data' });
    }
    return data;
  }

  async findByName(nombre: string): Promise<ProveedorEntity> {
    const data = await this.proveedorRepository.findOne({
      where: [{ nombre: nombre }]
    });
    if (!data) {
      throw new NotFoundException({ message: 'no data' });
    }
    return data;
  }

  async saveData(proveedor: ProveedorEntity): Promise<ProveedorEntity> {
    return await this.proveedorRepository.save(proveedor);
  }

  async updateData(proveedor: ProveedorEntity): Promise<ProveedorEntity> {
    return await this.proveedorRepository.save(proveedor);
  }

  async deleteData(proveedor: ProveedorEntity): Promise<ProveedorEntity> {
    this.proveedorRepository.delete(proveedor);
    return;
  }
}
