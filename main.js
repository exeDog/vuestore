var app = new Vue({
    el: '#app',
    data:{
        product:'Pair of Socks',
        image: 'green-socks.jpg',
        link:'',
        inventory:10,
        onSale:true,
        details:["80% cotton", "20% polyester", "Long-tubed"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: 'green-socks.jpg',
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: 'white-socks.jpg'

            }
        ],
        sizes: ["S","M","L","XL","XXL"],
        cart:0,
    },
    computed:{
        inStock(){
            return this.inventory > 0
        }
    },
    methods:{
        addToCart(){
            this.cart+=1;
            this.inventory-=1;
        },
        clearCart(){
          this.cart =0;
          this.inventory =10;
        },
        updateProduct(variantImage){
            this.image =variantImage
        }
    }
});