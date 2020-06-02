export interface SwearJarResponse {
  uuid: String;
  incrementer: number;
  name: String;
  balance: number;
}

export interface SwearJarRequest {
  name: String;
  incrementer: number;
}
