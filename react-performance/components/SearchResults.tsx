import { SearchResultItem } from './SearchResultItem';

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>
}

export function SearchResults({ results }: SearchResultsProps) {
  return (
    <div>
      {results.map(product => {
        return (
          <SearchResultItem product={product} key={product.id} />
        )
      })}
    </div>
  );
}