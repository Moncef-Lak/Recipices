import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Skeleton from "../../components/Skeleton";
import { BsPeople } from "react-icons/bs";
import { GrRestaurant } from "react-icons/gr";
import { IoTimeOutline } from "react-icons/io5";
import { GiRiceCooker, GiCoolSpices, GiChefToque } from "react-icons/gi";
import Head from "next/head";

export default function RecipeDetails({ recipe }) {
  if (!recipe) return <Skeleton />;
  const PerssoneNumbers = [1, 2, 3];
  const randomPesrsonne =
    PerssoneNumbers[Math.floor(Math.random() * PerssoneNumbers.length)];
  const { thumbnail, title, cookingTime, ingredients, method } = recipe.fields;

  return (
    <>
      <Head title={title} />
      <div className="recipe-detail">
        <div className="recipe-detail-head">
          <img src={"https:" + thumbnail.fields.file.url} alt="img" />
          <div className="informations">
            <div className="cover">
              <div className="recipe-title">{title}</div>
              <div className="informations-title">Informations</div>
              <div className="info-box">
                <div className="title">
                  <div className="sym">
                    <BsPeople />
                  </div>
                  <b>{randomPesrsonne}</b>
                </div>
                <div className="info">Personnes</div>
              </div>
              <div className="info-box">
                <div className="title">
                  <div className="sym">
                    <GrRestaurant />
                  </div>
                  <b>Facile</b>
                </div>
                <div className="info">Difficulty</div>
              </div>
              <div className="info-box">
                <div className="title">
                  <div className="sym">
                    <IoTimeOutline />
                  </div>
                  <b>{cookingTime}m</b>
                </div>
                <div className="info">Preparation</div>
              </div>
              <div className="info-box">
                <div className="title">
                  <div className="sym">
                    <GiRiceCooker />
                  </div>
                  <b>{cookingTime + 10}m</b>
                </div>
                <div className="info">Cooking</div>
              </div>
            </div>
          </div>
        </div>
        <div className="recipe-detais-body">
          <div className="Ingredients">
            <div className="head">
              <div className="mini-title">Ingredients</div>
              <div className="sym">
                <GiCoolSpices />
              </div>
            </div>
            <div className="info">
              {ingredients.map((ing, key) => (
                <div className="ingridient-box" key={key}>
                  {ing}
                </div>
              ))}
            </div>
          </div>

          <div className="Ingredients">
            <div className="head">
              <div className="mini-title">Preparation</div>
              <div className="sym">
                <GiChefToque />
              </div>
            </div>
            <div className="info">
              {[...documentToReactComponents(method)[0].props.children].map(
                (text, key) => {
                  return (
                    <div key={key} className="method-box">
                      <div className="num">{key + 1}</div>
                      {text}
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "recipe",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slog: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "recipe",
    "fields.slug": params.slog,
  });
  if (!items.length)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  return {
    props: { recipe: items[0] },
    revalidate: 1,
  };
};
