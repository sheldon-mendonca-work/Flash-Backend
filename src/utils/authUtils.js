import dayjs from "dayjs";
import { jwtDecode } from "jwt-decode";
import ExpressError from "../../error/ExpressError.js";
import UserRepo from "../repos/user-repo.js";

export const requiresAuth = async (request, next) => {
  try {
    const encodedToken = request.headers.authorization;
    const decodedToken = jwtDecode(
      encodedToken,
      process.env.REACT_APP_JWT_SECRET
    );
    
    if (decodedToken) {
      const user = await UserRepo.findByEmail(decodedToken.email);
      if (user.length === 1) {
        return user[0]._id;
      }
    }else{
      throw new ExpressError(401, "The token is invalid. Unauthorized access error.");
    }

  } catch (error) {
    next(error);
  }
};

export const formatDate = () => dayjs().format("YYYY-MM-DDTHH:mm:ssZ");
