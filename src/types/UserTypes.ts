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
    options?: Array<any>;
  } | null;
}

interface UserProfileInterface {
  name: string;
  mail: string;
  field_u_first_name: string;
  field_u_last_name: string;
  user_picture: any;
}

export type { FavortieRecipeInterafce, RecipeLink, UserProfileInterface };
