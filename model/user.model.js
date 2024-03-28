const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// /**
//  * @swagger
//  * definitions:
//  *   User:
//  *     type: object
//  *     required:
//  *       - firstName
//  *       - lastName
//  *       - password
//  *       - nationalId
//  *       - email
//  *       - age
//  *     properties:
//  *       firstName:
//  *         type: string
//  *       lastName:
//  *         type: string
//  *       password:
//  *         type: string
//  *       nationalId:
//  *         type: string
//  *       email:
//  *         type: string
//  *       phone:
//  *         type: string
//  *       age:
//  *         type: number
//  */

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

const UserSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        nationalId: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        phone: {
            type: String,
            unique: true,
        },
        age: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = User = mongoose.model("User", UserSchema);
