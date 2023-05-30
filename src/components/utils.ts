
import { Show } from "entities/Seat";
import { v4 as uuidv4 } from 'uuid';

export function generateSeats(showId: string, numberOfSeats:number): Show[]{
    let seats: Show[] = [];
    let seatsPerRow: number = 10;
    const alphabet: String = 'abcdefghijklmnopqrstuvwxyz';
    
    for (let i = 0; i < alphabet.length; i++) {
        for (let j = 1; j < numberOfSeats; j++) {
            let seatId = alphabet[i] + j;
            seats.push({id: uuidv4(), showId, seatId, status: 0 });
            if (j === seatsPerRow) {
                break;
            }
        }
    }

  return seats;
}

export function findPairs(sequence) {
    const pairs:any = [];
  
    for (let i = 0; i < sequence.length; i++) {
      for (let j = i + 1; j < sequence.length; j++) {
        const pair = [sequence[i], sequence[j]];
        pairs.push(pair);
      }
    }
  
    return pairs;
}