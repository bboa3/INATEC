/*
  Warnings:

  - You are about to drop the column `time` on the `classes` table. All the data in the column will be lost.
  - Added the required column `time_id` to the `classes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "classes" DROP COLUMN "time",
ADD COLUMN     "time_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "times" (
    "id" SERIAL NOT NULL,
    "time" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "times.time_unique" ON "times"("time");

-- AddForeignKey
ALTER TABLE "classes" ADD FOREIGN KEY ("time_id") REFERENCES "times"("id") ON DELETE CASCADE ON UPDATE CASCADE;
