import Product from "@/components/Product";

const getProducts = async() =>{
    const res = await fetch('http://localhost:5000/products',{next: {revalidate: 10}});
    return res.json()
}

const ProductsPage = async() => {
    const products = await getProducts();
    return (
        <div className="w-10/12 mx-auto">
            <h1>Products Length: {products.length}</h1>

            <div className="grid grid-cols-3 gap-4">
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>

       
    );
};

export default ProductsPage;