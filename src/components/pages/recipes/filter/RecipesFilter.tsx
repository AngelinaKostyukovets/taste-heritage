import { Select, Space } from 'antd'
import { useSortRecipes } from '../../../../hooks/useSortRecipes'

export default function RecipesFilter() {
  const { sortRecipes, setSortRecipes } = useSortRecipes()

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
