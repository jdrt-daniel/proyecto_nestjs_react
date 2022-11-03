import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'proveedores ' })
export class ProveedorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30, nullable: false })
  nombre: string;

  @Column({ type: 'boolean', default: true, nullable: false })
  estado: boolean;
}
