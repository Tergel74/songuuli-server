const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    swaggerDefinition: {
        restapi: "3.0.0",
        info: {
            title: "My API",
            version: "1.0.0",
            description: "REST API for Songuuli Project",
        },
        components: {
            securitySchemas: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
        security: {
            bearerAuth: [],
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT}`,
            },
        ],
    },
    apis: ["routes/**.js"],
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));
};
