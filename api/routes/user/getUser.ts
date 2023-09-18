import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../../lib/prisma";

export async function GetUser(fastify: FastifyInstance) {
    fastify.post('/user', async (request, response) => {
        const userId = z.object({
            email: z.string(),
            password: z.string()
        })

        const { email, password } = userId.parse(request.body)


        const user = await prisma.user.findUniqueOrThrow({
            where: {
                email,
            },
        })

        if (password != user.password) {
            return response.status(401).send('Incorrect')
        }

        return { user }
    })
}