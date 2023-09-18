import Fastify from 'fastify'
import Cors from '@fastify/cors'
import { RegisterUser } from './routes/user/registerUser'
import { GetUser } from './routes/user/getUser'
import { CreateNote } from './routes/notes/createNote'
import { GetNotes } from './routes/notes/getNotes'
import { DeleteNote } from './routes/notes/deleteNote'
import { GetNoteByid } from './routes/notes/getNoteById'

async function Server() {
    const fastify = Fastify({
        logger: true
    })

    fastify.register(Cors, {
        origin: true,
    })

    await fastify.register(RegisterUser)
    await fastify.register(GetUser)
    await fastify.register(CreateNote)
    await fastify.register(GetNotes)
    await fastify.register(DeleteNote)
    await fastify.register(GetNoteByid)

    await fastify.listen({ port: 3333, host: '0.0.0.0' })
}

Server()