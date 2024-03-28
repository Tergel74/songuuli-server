const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const checkAuth = require("../middlewares/checkAuth");

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
 * /users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: List of users
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/User'
 */
router.get("/", checkAuth, UserController.getUsers);

router.get("/me", checkAuth, UserController.getMe);

module.exports = router;
