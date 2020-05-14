import { UserGateway } from "../../gateways/UserGateway";


export class LoginUC {
  constructor(
    private userGateway: UserGateway,
  ) {}
  async execute(input: LoginUCInput): Promise<LoginUCOutput> {
   const token = await this.userGateway.login(input.email, input.password);

    return {
      token
  }
}
}

export interface LoginUCInput{
  email: string;
  password: string;
}

export interface LoginUCOutput{
  token: string
}