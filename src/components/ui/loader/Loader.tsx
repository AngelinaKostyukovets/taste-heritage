import { Space } from 'antd'
import S from './Loader.styled'

export default function Loader() {
  return (
    <>
      <S.backdrop />
      <S.loaderContainer>
        <Space>
          <S.loader />
        </Space>
      </S.loaderContainer>
    </>
  )
}
