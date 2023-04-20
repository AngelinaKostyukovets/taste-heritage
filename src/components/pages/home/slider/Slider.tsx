import { useAppSelector } from '../../../../store/store'
import S from './Slider.styled'

export default function Slider() {
  const recipes = useAppSelector((state) => state.recipes.recipes)
  const onChange = (currentSlide: number) => {
    console.log(currentSlide)
  }

  return (
    <S.container afterChange={onChange}>
      {recipes.map(
        (recipe) =>
          recipe.id < 5 && (
            <S.content>
              <S.img src={recipe.image_url} alt={recipe.name} />
              <S.textContent>
                <h3>{recipe.name}</h3>
                <p>{recipe.description}</p>
              </S.textContent>
            </S.content>
          )
      )}
    </S.container>
  )
}
