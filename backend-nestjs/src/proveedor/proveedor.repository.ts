import { ProveedorEntity } from './proveedor.entity';
import { Repository, EntityRepository } from 'typeorm';
@EntityRepository(ProveedorEntity)
export class ProveedorRepository extends Repository<ProveedorEntity> {}
