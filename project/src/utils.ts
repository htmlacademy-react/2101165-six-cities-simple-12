import { v4 as uuidv4 } from 'uuid';

export const randomId = () : string => uuidv4();

export const makeBigFirstLetter = (str: string) => str[0].toUpperCase() + str.slice(1);

export const calculateRating = (rating: number) => Math.round(rating) * 20;
