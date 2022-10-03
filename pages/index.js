import { createClient } from "contentful";
import { useEffect } from "react";
import RecipeCard from "../components/RecipeCard";

export const getStaticProps = async () => {
  const myContentfulAccount = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await myContentfulAccount.getEntries({ content_type: 'recipe' });
  return { props: { recipes: res.items } };
}

export default function Recipes({ recipes }) {
  const recipeArr = recipes.map(item => {
    return { recipe: item.fields }
  });
  const paths = recipes.map((recipe) => { return { params: { slug: recipe.fields.slug } } })

  return (
    <div className="recipe-list">
      {recipeArr.map((recipe, id) => <RecipeCard key={id} recipes={recipe} />)}
      <style jsx>{`
        .recipe-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px 60px;
        }
      `}</style>
    </div>
  )
}