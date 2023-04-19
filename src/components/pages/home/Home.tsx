import { useAppSelector } from '../../../store/store'
import Recipes from '../recipes/Recipes'
import Slider from './slider/Slider'

export default function Home() {
  const recipes = useAppSelector((state) => state.recipes.recipes)
  return (
    <>
      <Slider />
      <Recipes redTitle="Кулинарные" otherTitle="рецепты" />
    </>
  )
}
