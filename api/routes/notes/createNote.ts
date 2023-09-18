import { randomUUID } from "crypto";
import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../../lib/prisma";

export async function CreateNote(fastify: FastifyInstance) {
    fastify.post('/note/:id', async (request, response) => {

        const noteInfo = z.object({
            Title: z.string(),
            description: z.string()
        })

        const userId = z.object({
            id: z.string()
        })

        const {id} = userId.parse(request.params)

        const { Title, description } = noteInfo.parse(request.body)
        
        if (!Title || !description) {
            console.log("Campos estão vazios")
        } else {
            await prisma.notes.create({
                data: {
                    id: randomUUID(),
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

        

        return response.status(201).send({message: "Sucesso"})
    })
}