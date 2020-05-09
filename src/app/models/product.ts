export class Product {    
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(id, name, description = '', price = 0, imageUrl = 'https://www.preciosonline.co/wp-content/uploads/2017/09/pTRUCA1-25913242enh-z6.jpg') {        
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.imageUrl = imageUrl
    }
}