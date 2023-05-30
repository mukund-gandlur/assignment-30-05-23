/*
  Warnings:

  - A unique constraint covering the columns `[showId,seatId]` on the table `show_seat` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "seatid_showid_unique" ON "show_seat"("showId", "seatId");
