/*
  Warnings:

  - Added the required column `time` to the `episodes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "episodes" ADD COLUMN     "time" INTEGER NOT NULL;
