export class Game {
    _id?: number;
    title: string;
    description: string;
    genre: string[];
    platform: string[];
    price: number;
    releaseDate: Date;
    publisher: string;
    imageUrl: string;
    isOnSale: boolean;

    constructor(title: string, description: string,
                genre: string[], platform: string[], 
                price: number, releaseDate: Date,
                publisher: string, imageUrl: string, isOnSale: boolean) {
        this.title = title;
        this.description = description;
        this.genre = genre;
        this.platform = platform;
        this.price = price;
        this.releaseDate = releaseDate;
        this.publisher = publisher;
        this.imageUrl = imageUrl;
        this.isOnSale = isOnSale;
    }
}

