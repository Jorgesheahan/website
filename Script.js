const TwitterLink = "https://twitter.com/home";
const InstagramLink = "https://www.instagram.com";

const ProductsJSON = [
    {
        "Product Image": "Images/Polybolt Logo.png",
        "Product Link": null,
        "Product Name": "GEO-STRIKE"
    },
    {
        "ProductImage": "Images/Polybolt Logo.png",
        "ProductLink": null,
        "ProductName": "FP Weapon System"
    }
]

function AddProductObject(ProductName){

    ProductsJSON.ProductName

    document.write('<li class="Product"><a href='+ ProductLink +'><img src='+ ProductImage +' alt="Game Logo"><p>'+ ProductsJSON.ProductName +'</p></a></li>');

}


