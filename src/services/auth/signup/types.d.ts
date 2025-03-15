export interface SignUpBody {
  email: string;
  password: string;
}

export interface SignUpResponse {
  id: number;
  email: string;
  register_time: string;
}
