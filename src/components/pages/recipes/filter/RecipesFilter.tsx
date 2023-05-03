import { Select, Space } from 'antd'
import { useFilterRecipes } from '../../../../hooks/useFilterRecipes'

export default function RecipesFilter() {
  const { sortRecipes, setSortRecipes } = useFilterRecipes()

  const onChange = (value: string) => {
    setSortRecipes(value)
  }

  return (
    <Space>
      <Select
        value={sortRecipes}
        style={{ width: '140px' }}
        onChange={onChange}
        options={[
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
