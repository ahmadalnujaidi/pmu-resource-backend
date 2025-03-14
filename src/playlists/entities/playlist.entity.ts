import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  CreateDateColumn, 
  UpdateDateColumn, 
  ManyToOne, 
  ManyToMany, 
  JoinTable,
  JoinColumn
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Material } from '../../materials/entities/material.entity';

@Entity('playlists')
export class Playlist {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => User, user => user.playlists)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToMany(() => Material)
  @JoinTable({
    name: 'playlist_materials',
    joinColumn: { name: 'playlist_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'material_id', referencedColumnName: 'id' },
  })
  materials: Material[];
}
