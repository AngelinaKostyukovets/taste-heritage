import styled from 'styled-components'
import { Pagination } from 'antd'
import { styles } from '../../globalStyle'

const S = {
  container: styled.div`
    ${styles.container};
    padding: 0 20px;
  `,
  title: styled.h2`
    ${styles.comfortaa};
    font-size: 46px;
    line-height: 51px;
    padding-bottom: 20px;
    @media (max-width: 1200px) {
      font-size: 35px;
      line-height: 40px;
      padding-bottom: 10px;
    }
    @media (max-width: 768px) {
      font-size: 26px;
      line-height: 30px;
    }
  `,
  sortContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    ${styles.comfortaa};
    font-size: 14px;
    line-height: 19px;
    padding-bottom: 30px;
    @media (max-width: 1200px) {
      padding-bottom: 20px;
    }
  `,
  cards: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, auto));
    grid-column-gap: 30px;
    grid-row-gap: 20px;
    padding-bottom: 40px;
    @media (max-width: 1200px) {
      padding-bottom: 30px;
    }
  `,
  pagination: styled(Pagination)`
    text-align: center;
    padding-bottom: 50px;
    @media (max-width: 1200px) {
      padding-bottom: 30px;
    }
  `,
}

export default S
