/* eslint-disable no-console */
import bcrypt from "bcryptjs";
import envVars from "../config/env";
import { IAuthProvider, IUser, Role } from "../modules/user/user.interface";
import { User } from "../modules/user/user.model";

const seedAdmin = async () => {
  try {
    const isAdminExist = await User.findOne({
      email: envVars.ADMIN_EMAIL,
    });

    if (isAdminExist) {
      console.log("Supper admin already Exits");
      return;
    }

    console.log("Trying to create supper admin...");

    const hashedPassword = await bcrypt.hash(
      envVars.ADMIN_PASSWORD,
      envVars.BCRYPT_SALT_ROUND
    );

    const authProvider: IAuthProvider = {
      provider: "credentials",
      providerId: envVars.ADMIN_EMAIL,
    };

    const payload: IUser = {
      name: "super admin",
      email: envVars.ADMIN_EMAIL,
      role: Role.ADMIN,
      password: hashedPassword,
      isVerified: true,
      auths: [authProvider],
    };

    const admin = await User.create(payload);
    console.log("Super admin created successfully \n");
    console.log(admin);
  } catch (error) {
    console.log(error);
  }
};

export { seedAdmin };
