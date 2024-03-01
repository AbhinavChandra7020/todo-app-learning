const zod = require("zod");

const todoSchema = zod.object({
    title: zod.string(),
    description: zod.string(),
})

const todoComplete = zod.object({
    id: zod.string()
})

module.exports = {
    todoSchema: todoSchema,
    todoComplete: todoComplete
}