const successMessage = { status: "success" };
const errorMessage = { status: "error" };

const status = {
  success: 200,
  error: 500,
  notFound: 404,
  unauthorized: 401,
  conflict: 409,
  created: 201,
  badRequest: 400,
  nocontent: 204,
};

export { successMessage, errorMessage, status };
