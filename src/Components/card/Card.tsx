import './card.css';   

interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard ({ product }: ProductCardProps){
  const { title, price, image } = product;  

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />  
      <div className="product-details">
        <h3 className="product-name">{title}</h3>  
        <p className="product-price">Price: ${price}</p>  
      </div>
    </div>
  );
};

 