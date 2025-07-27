type ProductSize = '' | 'S' | 'M' | 'L' | 'XL';
class Product {
    constructor(
        public name: string ='',
        public price: number = 0,
        public size: ProductSize = '',
    ) { }


    isProductValid(): boolean {

         for (const key in this) {
            switch( typeof this[key] ) {
                case 'string':
                    if (this[key].length <= 0) throw new Error(`${key} is required`);
                    break;
                case 'number':
                    if (this[key] <= 0) throw new Error(`${key} is zero`);
                    break;
                default:
                    throw new Error(`${typeof this[key]} is not supported`);
            
            }
        }

        return true
    }

    toString() {

      
         if (!this.isProductValid()) return;
       

        return `${this.name} ($${this.price}), ${this.size}`;
    }
}


(() => {



    const bluePants =
        new Product('Blue Large Pants',0,'XL');
    console.log(bluePants.toString()); // Blue Large Pants

})();