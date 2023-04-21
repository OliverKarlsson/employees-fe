interface ApiResponse<T> {
  status: ApiResponseStatus;
  responseData: T | null;
  error: Error | null;
}

export default ApiResponse;
