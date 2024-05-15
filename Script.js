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

// Image Selector
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-container img');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    document.getElementById('prev').addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        showImage(currentIndex);
    });

    document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
    });
});
