/*
  Warnings:

  - You are about to drop the column `Nome` on the `User` table. All the data in the column will be lost.
  - Added the required column `Name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "Nome",
ADD COLUMN     "Name" TEXT NOT NULL;
