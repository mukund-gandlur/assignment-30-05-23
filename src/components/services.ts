
import { PrismaClient } from "@prisma/client";
import { Cinema } from "entities/cinema";
import { Show } from "entities/Seat";
import { v4 as uuidv4 } from 'uuid';
import { findPairs, generateSeats } from "./utils";

const prisma = new PrismaClient();

export const fetchCinemas = async (): Promise<Array<Cinema>> => {
  
  const cinemas = await prisma.cinema.findMany({
    where: { status: 1 },
    orderBy: { createdAt: 'asc' },
  });

  return cinemas;
};


export const createCinema = async ({ numberOfSeats, name, pricePerTicket }: {numberOfSeats: number, name: string, pricePerTicket: number}): Promise<Cinema> => {
    const cinemaId = uuidv4();
    const showId = uuidv4();

    const seats: Show[] = generateSeats(showId, numberOfSeats);

    const cinemaObject: Array<any> = await prisma.$transaction([
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

    return cinemaObject[0]; // This returns only the cinema object
};


export const purchaseSingleTicket = async ({ showId, seatId, userId }: {showId: string, seatId: string, userId: string, amount: number}): Promise<any> => {
    const freeSeats = await prisma.show_seat.findFirst({
        where: {
            showId, seatId, status: 0
        }
    });

    const show = await prisma.show.findUnique({
        where: { 
            id: showId
        }
    });

    if(!freeSeats){
        throw new Error('Seat not available');
    }
    
    const ticketObject: Array<any> = await prisma.$transaction([
        prisma.ticket.create({
            data: {
                id: uuidv4(),
                status: 1,
                numberOfTickets: 1,
                amount: show?.pricePerTicket || 0,
                userId,
                showSeatId: freeSeats.id,
            },
        }),
        prisma.show_seat.update({
            data: {
                status: 1,
            },
            where: {
                id: freeSeats.id,
            }
        })
    ]);

    console.log(ticketObject);
    return { seatId, ...show, ...ticketObject }
};



export const purchaseCoupleTicket = async ({ showId, userId }: {showId: string, seatId: string, userId: string, amount: number}): Promise<any> => {
    const freeSeats = await prisma.show_seat.findMany({
        where: {
            showId,
            status: 0
        }
    });

    const show = await prisma.show.findUnique({
        where: { 
            id: showId,
        }
    });

    if(!freeSeats || freeSeats.length <= 0)
        throw new Error('Seats not available');

    const pairs = findPairs(freeSeats);

    if(!pairs || pairs.length <= 0)
        throw new Error('Couple tickets not available');

    const ticketObject: Array<any> = await prisma.$transaction([
        prisma.ticket.create({
            data: {
                id: uuidv4(),
                status: 1,
                numberOfTickets: 2,
                amount: (show?.pricePerTicket || 0) * 2,
                userId,
            },
        }),
        prisma.show_seat.update({
            data: {
                status: 1,
            },
            where: {
                seatId: {
                    In: pairs[0],
                },
            }
        })
    ]);

    return { ...ticketObject }
};
