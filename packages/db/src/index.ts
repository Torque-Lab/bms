//export client to user on backend

import { PrismaClient } from "@prisma/client";

export const client = new PrismaClient();
