const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/authController");

/**
 * @openapi
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      required:
 *       - firstName
 *       - lastName
 *       - password
 *       - confirmPassword
 *       - nationalId
 *       - email
 *      properties:
 *        firstName:
 *          type: string
 *          default: Бат
 *        lastName:
 *          type: string
 *          default: Болд
 *        password:
 *          type: string
 *          default: 123456
 *        confirmPassword:
 *          type: string
 *          default: 123456
 *        nationalId:
 *          type: string
 *          default: XX00000000
 *        email:
 *          type: string
 *          default: bat@gmail.com
 *        age:
 *          type: number
 *          default: 18
 *        phone:
 *          type: string
 *          default: 88888888
 *
 *    CreateUserResponse:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *        name:
 *          type: string
 *        _id:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */

/**
 * @swagger
 * /users/signup:
 *   post:
 *     summary: Register a new user
 *     requestBody:
 *          required: true
 *          contents:
 *              applications/json:
 *                  schema:
 *     parameters:
 *       - in: body
 *         name: user
 *         description: The user to create.
 *         schema:
 *           $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Successfully created
 *       400:
 *         description: Bad request
 */
router.post("/signUp", AuthController.signUp);

router.post("/signIn", AuthController.signIn);

router.post("/signOut", AuthController.signOut);

module.exports = router;
