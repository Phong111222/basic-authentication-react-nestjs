import { IsNotEmpty, IsString } from 'class-validator';

export class LoginRequestDto {
  @IsString()
  @IsNotEmpty()
  userName: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
