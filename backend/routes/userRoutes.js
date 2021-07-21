import express from "express";
const router = express.Router();

import { authUser, deleteUserById, getUserById, getUsers, registerAdmin, registerUser, updateUser } from "../controllers/userController.js";
import { admin, protect } from "../middlewares/authHandler.js";


router.route("/").get(protect,admin,getUsers);
router.route("/register").post(registerUser);
router.route("/admin/register").post(protect,admin,registerAdmin);
router.route("/login").post(authUser);
router.route("/:id").get(protect,admin,getUserById).put(protect,admin,updateUser).delete(protect,admin,deleteUserById);



export default router;
