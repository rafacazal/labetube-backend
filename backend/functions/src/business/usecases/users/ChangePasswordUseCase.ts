import { UserGateway } from "../../gateways/UserGateway";


export class ChangePasswordUC {
  constructor(
    private userGateway: UserGateway,
  ) {}
  async execute(input: ChangePasswordUCInput): Promise<void> {
   
    await this.userGateway.changePassword(input.email);

  }
}


export interface ChangePasswordUCInput{
  email: string
}
