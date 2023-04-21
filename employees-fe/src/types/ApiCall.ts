import ApiResponse from "./ApiResponse";

type ApiCall<R, A extends [] = []> = (...args: A) => Promise<ApiResponse<R>>;

export default ApiCall;
