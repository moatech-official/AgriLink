import { IsEmail, IsNotEmpty, IsIn } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ description: 'User email address', example: 'user@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'User password', example: 'password123' })
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: 'Role of the user',
    example: 'farmer',
    enum: ['farmer', 'buyer', 'delivery_agent', 'admin'],
  })
  @IsIn(['farmer', 'buyer', 'delivery_agent', 'admin'])
  role: string;
}