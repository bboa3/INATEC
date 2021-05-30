/*
  Warnings:

  - Changed the type of `year` on the `classes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropIndex
DROP INDEX "classes.course_unique";

-- AlterTable
ALTER TABLE "classes" DROP COLUMN "year",
ADD COLUMN     "year" INTEGER NOT NULL;
