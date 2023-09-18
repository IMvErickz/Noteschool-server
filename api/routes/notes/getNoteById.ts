import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../../lib/prisma";

export async function GetNoteByid(fastify: FastifyInstance) {
    fastify.get('/note/:id', async (request, response) => {
        const noteSchema = z.object({
            id: z.string()
        })

        const { id } = noteSchema.parse(request.params)

        const note = await prisma.notes.findMany({
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

        response.status(200).send({ note })


    })
}