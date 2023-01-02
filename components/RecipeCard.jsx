import Image from "next/image";
import Link from "next/link";

export default function RecipeCard({ recipes }) {
  const { title, slug, cookingTime, thumbnail } = recipes.recipe;
  const imageUrl = thumbnail.fields.file.url;
  const caloriesNumbers = [120, 150, 60, 110, 90];
  const PerssoneNumbers = [1, 2, 3];
  const randomCalorie =
    caloriesNumbers[Math.floor(Math.random() * caloriesNumbers.length)];
  const randomPesrsonne =
    PerssoneNumbers[Math.floor(Math.random() * PerssoneNumbers.length)];

  return (
    <Link href={"/recipes/" + slug}>
      <div className="card">
        <div className="img">
          <Image
            fill
            style={{ objectFit: "contain" }}
            alt="img"
            src={`https:${imageUrl}`}
          />
        </div>
        <div className="card-title">{title}</div>
        <div className="calories">{randomCalorie} calories</div>
        <hr />
        <div className="card-details">
          <div className="time">
            Time
            <b>{cookingTime} mins</b>
          </div>
          <div className="time porton">
            Portion
            <b>{randomPesrsonne} persons</b>
          </div>
        </div>
      </div>
    </Link>
  );
}
