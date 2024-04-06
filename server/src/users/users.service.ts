import { Injectable } from '@nestjs/common';

export class User {
  id: string;
  userName: string;
  password: string;
}

@Injectable()
export class UsersService {
  users: User[] = [
    {
      id: 'admin',
      userName: 'admin',
      password: 'admin',
    },
    {
      id: 'user',
      userName: 'user',
      password: 'user',
    },
  ];

  constructor() {}

  async find(data: Omit<User, 'id'>) {
    return this.users.find(
      (user) =>
        user.password === data.password && user.userName === data.userName,
    );
  }
}
