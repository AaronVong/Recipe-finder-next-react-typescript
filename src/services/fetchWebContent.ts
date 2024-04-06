import { EdamamResponseInterface } from "@/types/EdamamTypes";
import { getFetchHeaderOptions } from "./fetchHelper";
import { RecipeLink } from "@/types/UserTypes";

async function fetchMenuItem(menuName: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_PATH}/system/menu/${menuName}/linkset`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function searchRecipe(
  key: string
): Promise<EdamamResponseInterface | null> {
  try {
    let url = `${process.env.NEXT_PUBLIC_RECIPE_PATH}?type=public&q=${key}&app_id=${process.env.NEXT_PUBLIC_RECIPE_APP_ID}&app_key=${process.env.NEXT_PUBLIC_RECIPE_APP_KEY}`;
    const options = getFetchHeaderOptions();
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function nextPageFetch(nextPagePath: string | null | undefined) {
  try {
    if (!nextPagePath) {
      return null;
    }
    const options = getFetchHeaderOptions();
    const response = await fetch(nextPagePath, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function addFavoriteRecipe(recipe: RecipeLink) {
  let response = {
    status: false,
    data: null,
  };
  try {
    let options = getFetchHeaderOptions("POST", JSON.stringify(recipe), true);
    options.headers = {
      ...options.headers,
      "Content-Type": "application/json",
    };
    const responseFromApi = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_PATH}/api/v1/add/favorite-recipe?_format=json`,
      options
    );
    let data = await responseFromApi.json();
    response.status = responseFromApi.ok;
    if (responseFromApi.ok) {
      response.data = data;
    }
    return response;
  } catch (error) {
    console.log(error);
    return response;
  }
}

async function getFavoriteRecipeList() {
  let response = {
    status: false,
    data: null,
  };
  try {
    let options = getFetchHeaderOptions("GET", undefined, true);
    const responseFromApi = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_PATH}/api/v1/favorite-recipe?_format=json`,
      options
    );
    let data = await responseFromApi.json();
    if (responseFromApi.ok) {
      response.data = data;
      response.status = true;
    }
    return response;
  } catch (error) {
    console.log(error);
    return response;
  }
}
export {
  fetchMenuItem,
  searchRecipe,
  nextPageFetch,
  addFavoriteRecipe,
  getFetchHeaderOptions,
  getFavoriteRecipeList,
};
