export default interface Card {
    _id?: string;
    name: string;
    description: string;
    phone: number;
    website: string;
    address: string;
    image: string;
    userId?: string;
}