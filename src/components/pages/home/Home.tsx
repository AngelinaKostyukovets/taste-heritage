import Recipes from '../recipes/Recipes'
import Slider from './slider/Slider'

export default function Home() {
  return (
    <>
      <Slider />
      <Recipes redTitle="Кулинарные" otherTitle="рецепты" />
    </>
  )
}
