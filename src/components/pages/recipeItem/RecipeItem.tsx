import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faBowlRice } from '@fortawesome/free-solid-svg-icons'
import {
  ClockCircleOutlined,
  CommentOutlined,
  HeartOutlined,
} from '@ant-design/icons'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import S from './RecipeItem.styled'
import { recipeActions } from '../../../store/recipe/recipeSlice'
import Loader from '../../ui/loader/Loader'

export default function RecipeItem() {
  const dispatch = useAppDispatch()
  const recipe = useAppSelector((state) => state.recipe.recipe)
  const loading = useAppSelector((state) => state.recipe.loading)
  const { id } = useParams()
  const recipeId = +(id ?? 0)
  const upperType = () => {
    const firstLetter = recipe?.typeDish.charAt(0).toUpperCase()
    const lowerText = recipe?.typeDish.slice(1)
    // return firstLetter + lowerText
  }

  useEffect(() => {
    if (recipeId) {
      dispatch(recipeActions.getRecipe(recipeId))
    }
  }, [id])
  return (
    <S.container>
      {loading && <Loader />}
      {recipe && (
        <>
          <S.typeContainer>
            <S.type>{recipe.typeDish}</S.type>
            <S.date>{recipe.date}</S.date>
          </S.typeContainer>
          <S.title>{recipe.name}</S.title>
          <S.timeContainer>
            <S.time>
              <S.space>
                <ClockCircleOutlined />
              </S.space>
              {recipe.time}
            </S.time>
            <S.portions>
              <S.icon icon={faBowlRice} style={{ color: '#000000' }} />{' '}
              {recipe.portions}
            </S.portions>
          </S.timeContainer>
          <S.shortContent>
            <S.shortImgContainer>
              <img src={recipe.image_url} alt={recipe.name} />
            </S.shortImgContainer>
            <div>
              <S.describtion>{recipe.description}</S.describtion>
              <S.ingridients>Ингредиенты</S.ingridients>
              <S.listProducts>
                {recipe.ingredients.map((ingrigient) => (
                  <li>{ingrigient}</li>
                ))}
              </S.listProducts>
            </div>
          </S.shortContent>
          <S.likesContainer>
            <div>
              <S.space>
                <HeartOutlined />
              </S.space>
              {recipe.likes}
            </div>
            <div>
              <S.space>
                <CommentOutlined />
              </S.space>
              {recipe.comments.length}
            </div>
            <div>
              <S.icon icon={faBookmark} style={{ color: '#000000' }} />{' '}
              Избранное
            </div>
          </S.likesContainer>

          <S.titleSteps>Пошаговый рецепт приготовления</S.titleSteps>
          {recipe.recipe.map((step, index) => (
            <S.step>
              <div>
                <img src={step.img} alt={`шаг ${index + 1}`} />
              </div>
              <p>
                {index + 1}. {step.description}
              </p>
            </S.step>
          ))}
          <S.author>Рецепт подготовил(а): {recipe.author}</S.author>
        </>
      )}
    </S.container>
  )
}
