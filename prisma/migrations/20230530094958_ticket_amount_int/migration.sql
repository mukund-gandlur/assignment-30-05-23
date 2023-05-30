/*
  Warnings:

  - Changed the type of `amount` on the `ticket` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "ticket" ADD COLUMN     "showSeatId" UUID,
DROP COLUMN "amount",
ADD COLUMN     "amount" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "ticket" ADD CONSTRAINT "ticket_showSeatId_fkey" FOREIGN KEY ("showSeatId") REFERENCES "show_seat"("id") ON DELETE SET NULL ON UPDATE CASCADE;
