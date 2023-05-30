import { PrismaClient } from ".prisma/client";
import { Cinema } from "entities/cinema";
import { Show } from "entities/Seat";
import { v4 as uuidv4 } from 'uuid';
import { generateSeats } from "./utils";

const prisma = new PrismaClient();

export const fetchCinemas = async (): Promise<Array<Cinema>> => {
  
  const cinemas = await prisma.cinema.findMany({
    where: { status: 1 },
    orderBy: { createdAt: 'asc' },
  });

  console.log(cinemas);
  return cinemas;
};


export const createCinema = async ({ numberOfSeats, name, pricePerTicket }: {numberOfSeats: number, name: string, pricePerTicket: number}): Promise<Cinema> => {
  
    console.log(numberOfSeats, name, pricePerTicket);
    const cinemaId = uuidv4();
    const showId = uuidv4();

    const seats: Show[] = generateSeats(showId, numberOfSeats);

    const masterOrderData: Array<any> = await prisma.$transaction([
        prisma.cinema.create({
            data: { id: cinemaId, name, numberOfSeats, status: 1 },
        }),
        prisma.show.create({
            data: { id: showId, cinemaId, name: `${name}_show1`, status: 1, pricePerTicket },
        }),
        prisma.show_seat.createMany({
            data: seats,
        })
    ]);

    return masterOrderData[0]; // This returns only the cinema object
};