-- DropForeignKey
ALTER TABLE "ticket" DROP CONSTRAINT "ticket_showSeatId_fkey";

-- AddForeignKey
ALTER TABLE "ticket" ADD CONSTRAINT "ticket_show_seat_id_foreign" FOREIGN KEY ("showSeatId") REFERENCES "show_seat"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
