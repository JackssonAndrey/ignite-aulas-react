interface SearchResultItem {
  product: {
    id: number;
    price: number;
    title: string;
  }
}

export function SearchResultItem({ product }: SearchResultItem) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  );
}