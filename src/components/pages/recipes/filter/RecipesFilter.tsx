import { Select, Space } from 'antd'
import { useEffect, useState } from 'react'
import { useAppDispatch } from '../../../../store/store'
import { recipesActions } from '../../../../store/recipes/recipesSlice'

export default function RecipesFilter() {
  const dispatch = useAppDispatch()
  const [sortRecipes, setSortRecipes] = useState<string>('likes')

  const fetchData = () => {
    dispatch(recipesActions.getRecipesList({ sortRecipes }))
  }
  const onChange = (value: string) => {
    setSortRecipes(value)
  }
  useEffect(() => {
    fetchData()
  }, [sortRecipes])
  return (
    <Space>
      <Select
        value={sortRecipes}
        style={{ width: '140px' }}
        onChange={onChange}
        options={[
          // {
          //   value: 'id',
          //   label: 'Релевантные',
          // },
          {
            value: 'likes',
            label: 'Популярные',
          },
          {
            value: 'date',
            label: 'Новые',
          },
        ]}
      />
    </Space>
  )
}
