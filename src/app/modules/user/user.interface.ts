/* eslint-disable no-unused-vars */
import { Model } from "mongoose";
import { USER_ROLE } from "./user.constant";

export interface TUser {
  [x: string]: any;
  email: string;
  password: string;
  role: 'admin' | 'user';
};

export interface UserModel extends Model<TUser> {
  isUserExistsByCustomEmail(email: string): Promise<TUser>;
  isPasswordMatched(plainTextPassword: string, hashedPassword: string): Promise<boolean>;
}

export type TUserRole = keyof typeof USER_ROLE;
