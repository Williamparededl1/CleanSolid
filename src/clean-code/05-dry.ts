type ProductSize = '' | 'S' | 'M' | 'L' | 'XL';
class Product {
    constructor(
        public name: string ='',
        public price: number = 0,
        public size: ProductSize = '',
    ) { }

    toString() {

        
        if (this.name.length <= 0) throw new Error('Name is required');
        if (this.price <= 0) throw new Error('price is zero');
        if (this.size.length <= 0) throw new Error('Size is required');

        return `${this.name} ($${this.price}), ${this.size}`;
    }
}


(() => {



    const bluePants =
        new Product('Blue Large Pants',10, 'M');
    console.log(bluePants.toString()); // Blue Large Pants

})();