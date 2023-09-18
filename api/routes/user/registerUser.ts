import { randomUUID } from "crypto";
import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../../lib/prisma";

export async function RegisterUser(fastify: FastifyInstance) {
    fastify.post('/user/register', async (request, response) => {
        const info = z.object({
            Name: z.string(),
            email: z.string().email(),
            password: z.string()
        })

        const {Name, email, password} = info.parse(request.body)
        
        await prisma.user.create({
            data: {
                id: randomUUID(),
                Name,
                email,
                password
            }
        })

        return response.status(201).send()
    })
}