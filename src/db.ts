import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as unknown as {
    prisma: PrismaClient | undefined;
}
export const prisma =
  globalForPrisma.prisma ?? new PrismaClient({
    log: ['query'],
  })

// const globalForPrisma = globalThis as unknown as { 
//     prisma: PrismaClient }

// export const prisma =
//   globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma