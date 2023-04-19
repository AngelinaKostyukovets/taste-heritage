interface CommentType {
  user: string
  comment: string
  date: string
}

interface RecipeType {
  description: string
  img: string
}

export interface RecipesType {
  id: number
  name: string
  category: Array<string>
  image_url: string
  description: string
  time: string
  portions: string
  likes: number
  comments: Array<CommentType>
  author: string
  date: string
  ingredients: Array<string>
  recipe: Array<RecipeType>
}

export interface RecipesFilterType {
  sortRecipes: string
}
