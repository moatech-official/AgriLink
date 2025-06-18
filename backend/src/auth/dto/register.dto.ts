import { IsEmail, IsString, MinLength, IsEnum } from 'class-validator';
import { Role } from '../roles.enum';

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEnum(Role)
  role: Role;
}
