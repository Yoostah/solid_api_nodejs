import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userExists = this.usersRepository.findById(user_id);

    if (userExists) {
      const updatedUser = this.usersRepository.turnAdmin(userExists);

      return updatedUser;
    }

    throw new Error("User not found");
  }
}

export { TurnUserAdminUseCase };
