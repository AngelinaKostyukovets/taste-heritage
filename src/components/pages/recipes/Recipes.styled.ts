import styled from 'styled-components'
import { Pagination } from 'antd'
import { styles } from '../../globalStyle'

const S = {
  container: styled.div`
    ${styles.container};
  `,
  title: styled.h2`
    ${styles.comfortaa};
    font-size: 46px;
    line-height: 51px;
    padding-bottom: 20px;
  `,
  sortContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    ${styles.comfortaa};
    font-size: 14px;
    line-height: 19px;
    padding-bottom: 30px;
  `,
  cards: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, max(446px));
    grid-column-gap: 30px;
    grid-row-gap: 20px;
    padding-bottom: 40px;
  `,
  pagination: styled(Pagination)`
    text-align: center;
    padding-bottom: 50px;
  `,
}

export default S
