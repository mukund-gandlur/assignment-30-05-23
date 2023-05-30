-- CreateTable
CREATE TABLE "user" (
    "id" UUID NOT NULL,
    "fullName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cinema" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "numberOfSeats" INTEGER NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "cinema_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "show" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "pricePerTicket" INTEGER NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 1,
    "cinemaId" UUID NOT NULL,

    CONSTRAINT "show_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "show_seat" (
    "id" UUID NOT NULL,
    "seatId" TEXT NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 0,
    "showId" UUID NOT NULL,

    CONSTRAINT "show_seat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ticket" (
    "id" UUID NOT NULL,
    "amount" TEXT NOT NULL,
    "numberOfTickets" INTEGER NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 1,
    "showId" UUID,
    "userId" UUID NOT NULL,

    CONSTRAINT "ticket_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "idx_cinema_cinemaid" ON "cinema"("id");

-- CreateIndex
CREATE INDEX "idx_show_showid" ON "show"("id");

-- CreateIndex
CREATE INDEX "idx_ticket_ticketid" ON "ticket"("id");

-- AddForeignKey
ALTER TABLE "show" ADD CONSTRAINT "show_cinema_cinemaid_foreign" FOREIGN KEY ("cinemaId") REFERENCES "cinema"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "show_seat" ADD CONSTRAINT "ticket_show_showid_foreign" FOREIGN KEY ("showId") REFERENCES "show"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ticket" ADD CONSTRAINT "ticket_showId_fkey" FOREIGN KEY ("showId") REFERENCES "show"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticket" ADD CONSTRAINT "ticket_user_userid_foreign" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
