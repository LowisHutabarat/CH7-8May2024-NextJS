import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export default function MealsDetailPage({params}) {
    const meal = getMeal(params.mealSlug);

    if(!meal) {
        notFound();
    }

    meal.instructions = meal.instructions.replace(/\n/g, "<br />");

    return (
    <>
        <header className={classes.header}>
        <div className={classes.image}>
        {/* {img} */}
        <Image src={meal.image} fill />
        </div>
        <div className={classes.headerText}>
        <h1>{meal.title}</h1>
        <p className={classes.creator}>
            by <a href="">{meal.creator}</a>
        </p>
        <p className={classes.sumarry}>
            {meal.summary}
        </p>
        <p className={classes.instructions} dangerouslySetInnerHTML={{
            __html: meal.instructions,
        }}></p>
        </div>
        </header>
        
        <main></main>
    </>
    );
}