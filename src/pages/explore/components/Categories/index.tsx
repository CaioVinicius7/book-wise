import { CategoriesContainer, CategoryTag } from "./styles";

interface CategoriesProps {
  selectedCategory: string;
  onSelectCategory(category: string): void;
}

const categories = [
  "Tudo",
  "Computação",
  "Educação",
  "Fantasia",
  "Ficção científica",
  "Horror",
  "HQs",
  "Suspense"
];

export function Categories({
  selectedCategory,
  onSelectCategory
}: CategoriesProps) {
  return (
    <CategoriesContainer>
      {categories.map((category) => {
        const isCategorySelected = category === selectedCategory;

        return (
          <li key={category}>
            <CategoryTag
              selected={isCategorySelected}
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </CategoryTag>
          </li>
        );
      })}
    </CategoriesContainer>
  );
}
