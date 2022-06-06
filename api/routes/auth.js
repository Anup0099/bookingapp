import express from "express";
import { login, register } from "../controllers/auth.js";
const router = express.Router();
// Express router is a class which helps us to create router handlers. By router handler i mean to not just providing routing to our app but also can extend this routing to handle validation, handle 404 or other errors etc. 


router.post('/register', register);
router.post('/login', login);


export default router;