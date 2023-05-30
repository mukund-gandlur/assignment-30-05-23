/*
  Warnings:

  - You are about to drop the column `show_seatId` on the `ticket` table. All the data in the column will be lost.
  - Added the required column `showSeatId` to the `ticket` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ticket" DROP CONSTRAINT "ticket_show_seatId_fkey";

-- AlterTable
ALTER TABLE "ticket" DROP COLUMN "show_seatId",
ADD COLUMN     "showSeatId" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "ticket" ADD CONSTRAINT "ticket_show_seat_id_foreign" FOREIGN KEY ("showSeatId") REFERENCES "show_seat"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
