/*
  Warnings:

  - You are about to drop the column `discipline` on the `teachers` table. All the data in the column will be lost.
  - Added the required column `module` to the `teachers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "teachers" DROP COLUMN "discipline",
ADD COLUMN     "module" TEXT NOT NULL;
