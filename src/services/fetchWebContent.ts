import { EdamamResponseInterface } from "@/types/EdamamTypes";

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

function getFetchHeaderOptions(
  method: string = "GET",
  body?: any
): RequestInit {
  return {
    method,
    mode: "cors",
    body,
  };
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
export { fetchMenuItem, searchRecipe, nextPageFetch, getFetchHeaderOptions };
