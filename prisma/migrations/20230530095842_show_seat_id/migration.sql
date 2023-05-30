/*
  Warnings:

  - Made the column `showSeatId` on table `ticket` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ticket" ALTER COLUMN "showSeatId" SET NOT NULL;
