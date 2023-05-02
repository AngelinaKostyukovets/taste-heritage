import styled from 'styled-components'
import { styles } from '../../globalStyle'

const S = {
  container: styled.div`
    ${styles.container};
  `,
  user: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 35px;
  `,
  fio: styled.div`
    display: flex;
    align-items: center;
    & p {
      ${styles.comfortaa};
      font-weight: 700;
      font-size: 26px;
      line-height: 32px;
      padding-left: 20px;
    }
  `,
  myData: styled.div`
    display: flex;
  `,
  recipe: styled.div`
    ${styles.comfortaa};
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    padding: 14px 50px;
    display: flex;
    align-items: center;
  `,
  counter: styled.div`
    line-height: 19px;
    background: rgba(0, 0, 0, 0.08);
    border-radius: 16px;
    padding: 2px 8px 0;
    margin-left: 10px;
  `,
  recipesNone: styled.div`
    ${styles.comfortaa};
    text-align: center;
    margin: 100px 0 200px;
    & .empty {
      font-weight: 700;
      font-size: 18px;
      line-height: 25px;
      margin-top: 44px;
    }
    & .willRecipes {
      font-size: 16px;
      line-height: 27px;
      margin-top: 15px;
    }
  `,
}
export default S
