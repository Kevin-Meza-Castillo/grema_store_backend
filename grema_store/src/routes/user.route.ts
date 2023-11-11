import express from "express";
import { isAuthenticated, isValidated } from "../middlewares/validators/validators";
import { UsersEndpoint } from "../services/user.endpoint";

export const router = express.Router()
const endpoint = new UsersEndpoint()

router.all('/get-user',  isValidated, endpoint.getUser)
router.all('/create-user',  isValidated, endpoint.createNewUser)
router.all('/delete-user',  isValidated, endpoint.deleteUser)

router.all('/reset-profile-email',  isValidated, endpoint.updateProfileEmail)
router.all('/reset-profile-password',  isValidated, endpoint.updateProfilePassword)
