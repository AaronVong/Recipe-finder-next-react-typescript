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
  token: AccessTokenInterface;
  isAuth: boolean;
}

interface AccessTokenInterface {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: string;
}

interface UserProfileInterface {
  name: string;
  mail: string;
  field_u_first_name: string;
  field_u_last_name: string;
  user_picture: any;
}

export type {
  FavortieRecipeInterafce,
  RecipeLink,
  AuthInterface,
  AccessTokenInterface,
  UserProfileInterface,
};
