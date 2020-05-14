import express from "express";
import { signupEndpoint } from "./endpoints/user/SignUp";
import { loginEndpoint } from "./endpoints/user/Login"
import cors from 'cors';
import { changePasswordEndpoint } from "./endpoints/user/ChangePassword";

const app = express();
app.use(cors({ origin: true }), express.json());

// user
app.post('/signup', signupEndpoint);
app.post('/login', loginEndpoint);
app.post('/password', changePasswordEndpoint)


export default app;