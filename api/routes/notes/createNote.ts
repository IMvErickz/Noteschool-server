import { randomUUID } from "crypto";
import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../../lib/prisma";

export async function CreateNote(fastify: FastifyInstance) {
    fastify.post('/note/:id', async (request, response) => {

        const noteInfo = z.object({
            Title: z.string(),
            description: z.string(),
            idNote: z.string()
        })

        const userId = z.object({
            id: z.string()
        })

        const { id } = userId.parse(request.params)

        const { Title, description, idNote } = noteInfo.parse(request.body)

        let note

        if (!Title || !description) {
            console.log("Campos estão vazios")
        } else {
            note = await prisma.notes.create({
                data: {
                    id: idNote,
                    Title,
                    description,
                    User: {
                        connect: {
                            id
                        }
                    }
                }
            })
        }



        return { note }
    })
}