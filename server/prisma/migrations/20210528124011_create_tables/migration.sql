/*
  Warnings:

  - Added the required column `password` to the `teachers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "teachers" ADD COLUMN     "password" TEXT NOT NULL;
