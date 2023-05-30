/*
  Warnings:

  - You are about to drop the column `showSeatId` on the `ticket` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ticket" DROP CONSTRAINT "ticket_show_seat_id_foreign";

-- AlterTable
ALTER TABLE "ticket" DROP COLUMN "showSeatId",
ADD COLUMN     "show_seatId" UUID;

-- AddForeignKey
ALTER TABLE "ticket" ADD CONSTRAINT "ticket_show_seatId_fkey" FOREIGN KEY ("show_seatId") REFERENCES "show_seat"("id") ON DELETE SET NULL ON UPDATE CASCADE;
