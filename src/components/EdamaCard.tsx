"use client";

import { EdamamRecipeInterface } from "@/types/EdamamTypes";
import LabelListing from "./ultilities/labelListing";

export default function EdamamCard({
  recipe,
}: {
  recipe: EdamamRecipeInterface;
}) {
  return (
    <div className="h-min-[500px] gap-y-3 bg-white border shadow-sm shadow-slate-500 p-3 flex flex-col text-stone-800 text-sm">
      <h5 className="capitalize font-semibold text-lg min-h-min">
        {recipe.label}
      </h5>
      <div className="flex gap-x-1 h-max-1/3">
        <div className="w-1/3 h-full">
          <img src={recipe.image} className="block min-h-auto max-w-full" />
        </div>
        <div className="w-2/3">
          <LabelListing labelArray={recipe.cuisineType} title="Cuisine" />
          <LabelListing labelArray={recipe.dietLabels} title="Diet Plans" />
          <LabelListing labelArray={recipe.healthLabels} title="Healths" />
        </div>
      </div>
      <div className="bg-slate-200 w-full h-max-1/3">
        <LabelListing labelArray={recipe.ingredientLines} title="Ingredients" />
      </div>
    </div>
  );
}
