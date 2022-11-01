import { createClient } from "contentful";
import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import Head from "next/head";

export const getStaticProps = async () => {
  const myContentfulAccount = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await myContentfulAccount.getEntries({ content_type: "recipe" });
  return { props: { recipes: res.items }, revalidate: 1 };
};

export default function Recipes({ recipes }) {
  const [categories, setCategories] = useState([]);
  const [filterWord, setFilterWord] = useState("All");

  const recipeArr =
    filterWord && filterWord !== "All"
      ? recipes
          .filter((item) => {
            if (item?.fields?.categories?.includes(filterWord))
              return { recipe: item.fields };
          })
          .map((item) => {
            return { recipe: item.fields };
          })
      : recipes.map((item) => {
          return { recipe: item.fields };
        });

  const paths = recipes.map((recipe) => {
    return { params: { slug: recipe.fields.slug } };
  });

  useEffect(() => {
    let myCategories = [];
    recipeArr.map((recipe) =>
      recipe?.recipe?.categories?.map((children) =>
        myCategories.push(children.replace(/\s/g, ""))
      )
    );
    setCategories(["All", ...new Set(myCategories)]);
  }, []);

  const [length, setlength] = useState(recipeArr?.length);

  useEffect(() => {
    setlength(recipeArr?.length);
  }, [recipeArr]);

  SwiperCore.use([Autoplay]);

  return (
    <>
      <Head title={"Recipes"} />
      <div className="recipe-list">
        <div className="title">
          <h1>Simple and Tasty Recipes</h1>
          <div className="text">
            He collected the plastic trash on a daily basis. It never seemed to
            end. Even if he cleaned the entire beach, more plastic would cover
            it effort that would never be done, he continued to pick up the
            trash each day.
          </div>
          <a
            href="https://www.linkedin.com/in/moncef-lak-198020204"
            className="link-me"
          >
            <img
              src="https://www.svgrepo.com/show/382108/male-avatar-boy-face-man-user-4.svg"
              alt=""
            />
            By LM Moncef Lakehal
          </a>
        </div>
        <div className="categories">
          <div className="cover">
            {categories.map((category, key) => {
              return (
                <div
                  onClick={() => setFilterWord(category)}
                  key={key}
                  className={`category ${
                    filterWord === category && "categoryActive"
                  }`}
                >
                  {category[0].toUpperCase() +
                    category.replace(category[0], "")}
                </div>
              );
            })}
          </div>
        </div>
        {recipeArr && (
          <div className="all-recipes-box">
            <Swiper
              autoplay
              modules={[Autoplay]}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                650: {
                  slidesPerView: length <= 5 ? 1 : 2,
                  width: 600,
                },
                950: {
                  slidesPerView: length <= 5 ? 1 : 3,
                  width: 900,
                },
              }}
            >
              {recipeArr.map((recipe, id) => {
                return (
                  <SwiperSlide key={id}>
                    <RecipeCard recipes={recipe} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        )}
      </div>
    </>
  );
}
