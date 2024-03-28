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
  uri: string;
  label: string;
  image: string;
  images: {
    THUMBNAIL: ImageInfo;
    SMALL: ImageInfo;
    REGULAR: ImageInfo;
    LARGE: ImageInfo;
  };
  source: string;
  url: string;
  shareAs: string;
  yield: Number;
  dietLabels: Array<string>;
  healthLabels: Array<string>;
  cautions: Array<string>;
  ingredientLines: Array<string>;
  ingredients: Array<EdamamIngredient>;
  calories: Number;
  glycemicIndex: Number;
  inflammatoryIndex: Number;
  totalCO2Emissions: Number;
  co2EmissionsClass: EmissionClass;
  totalWeight: Number;
  cuisineType: Array<string>;
  mealType: Array<string>;
  dishType: Array<string>;
  instructions: Array<string>;
  tags: Array<string>;
  externalId: string;
  totalNutrients: NutrientsInfo;
  totalDaily: NutrientsInfo;
  digest: Array<DigestEntry>;
}

type ImageInfo = {
  url: string;
  width: Number;
  height: Number;
};

interface EdamamIngredient {
  text: string;
  quantity: Number;
  measure: string;
  food: string;
  weight: Number;
  foodId: string;
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
    label: string;
    quantity: Number;
    unit: string;
  };
};

type DigestEntry = {
  label: string;
  tag: string;
  schemaOrgTag: string;
  total: Number;
  hasRDI: Boolean;
  daily: Number;
  unit: string;
  sub?: Array<Digest>;
};

type Digest = {
  label: string;
  tag: string;
  schemaOrgTag: string;
  total: Number;
  hasRDI: Boolean;
  daily: Number;
  unit: string;
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
