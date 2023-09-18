import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../../lib/prisma";

export async function DeleteNote(fastify: FastifyInstance) {
    fastify.delete('/deleteNote/:id', async (request, response) => {

        const taskId = z.object({
            id: z.string()
        })

        const {id} = taskId.parse(request.params)

        await prisma.notes.delete({
            where: {
                id
            },
            select: {
                id: true,
                Title: true,
                description: true,
                CreatedAt: true
            }
        })

        return response.status(201).send({message: "deletado"})
    })
}