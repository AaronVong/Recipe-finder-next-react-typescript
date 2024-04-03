interface FavortieRecipeInterafce {
  id: string | number;
  name: string;
  uid: string | number;
  links: Array<RecipeLink>;
}

interface RecipeLink {
  id: string | number;
  name: string;
  image: {
    uri: string;
    title: string;
    options: Array<any>;
  } | null;
}

interface AuthInterface {
  token: {
    access_token: string;
    refresh_token: string;
    expired: number | string;
  };
  isAuth: boolean;
}

export type { FavortieRecipeInterafce, RecipeLink, AuthInterface };
