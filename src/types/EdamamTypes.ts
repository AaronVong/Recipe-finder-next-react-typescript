interface EdamamResponseInterface {
  from: Number;
  to: Number;
  count: Number;
  _links: EdamamLinksInbterface;
  hits: Array<EdamamHitInterfacae>;
}

interface EdamamLinkInterface {
  href: string;
  title: string;
}

interface EdamamLinksInbterface {
  self?: EdamamLinkInterface;
  next: EdamamLinkInterface;
}

interface EdamamHitInterfacae {
  recipe: EdamamRecipeInterface;
  _links: EdamamLinksInbterface;
}

interface EdamamRecipeInterface {
  uri: String;
  label: String;
  image: string;
  images: {
    THUMBNAIL: ImageInfo;
    SMALL: ImageInfo;
    REGULAR: ImageInfo;
    LARGE: ImageInfo;
  };
  source: string;
  url: string;
  shareAs: String;
  yield: Number;
  dietLabels: Array<String>;
  healthLabels: Array<String>;
  cautions: Array<String>;
  ingredientLines: Array<String>;
  ingredients: Array<EdamamIngredient>;
  calories: Number;
  glycemicIndex: Number;
  inflammatoryIndex: Number;
  totalCO2Emissions: Number;
  co2EmissionsClass: EmissionClass;
  totalWeight: Number;
  cuisineType: Array<String>;
  mealType: Array<String>;
  dishType: Array<String>;
  instructions: Array<String>;
  tags: Array<String>;
  externalId: String;
  totalNutrients: NutrientsInfo;
  totalDaily: NutrientsInfo;
  digest: Array<DigestEntry>;
}

type ImageInfo = {
  url: String;
  width: Number;
  height: Number;
};

interface EdamamIngredient {
  text: String;
  quantity: Number;
  measure: String;
  food: String;
  weight: Number;
  foodId: String;
}

enum EmissionClass {
  A_PLUS = "A+",
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  E = "E",
  F = "F",
  G = "G",
}

type NutrientsInfo = {
  [key: string]: {
    label: String;
    quantity: Number;
    unit: String;
  };
};

type DigestEntry = {
  label: String;
  tag: String;
  schemaOrgTag: String;
  total: Number;
  hasRDI: Boolean;
  daily: Number;
  unit: String;
  sub?: Array<Digest>;
};

type Digest = {
  label: String;
  tag: String;
  schemaOrgTag: String;
  total: Number;
  hasRDI: Boolean;
  daily: Number;
  unit: String;
  sub?: Array<object>;
};

export type {
  EdamamResponseInterface,
  EdamamHitInterfacae,
  EdamamIngredient,
  EdamamLinkInterface,
  EdamamLinksInbterface,
  EdamamRecipeInterface,
};
