import { randomUUID } from "crypto";
import { prisma } from "../lib/prisma";

async function Main() {
    await prisma.user.create({
        data: {
            id: randomUUID(),
            Name: "João",
            email: "joão@gmail.com",
            password: "erickpsy10",
        }
    })
}
Main()