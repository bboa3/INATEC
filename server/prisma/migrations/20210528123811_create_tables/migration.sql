/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `teachers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `teachers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "teachers" ADD COLUMN     "username" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "teachers.username_unique" ON "teachers"("username");
