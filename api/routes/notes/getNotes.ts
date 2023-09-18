import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../../lib/prisma";

export async function GetNotes(fastify: FastifyInstance) {
    fastify.get('/userNotes/:id', async (request) => {

        const userId = z.object({
            id: z.string()
        })

        const {id} = userId.parse(request.params)

        const notes = await prisma.notes.findMany({
            where: {
                User: {
                    id
                }
            },
            select: {
                id: true,
                Title: true,
                description: true,
                CreatedAt: true
            }
        })

        return {notes}
    })
}