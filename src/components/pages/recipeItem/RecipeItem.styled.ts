import styled from 'styled-components'
import { Space } from 'antd'
import { styles } from '../../globalStyle'

const S = {
  container: styled.div`
    ${styles.container};
    ${styles.comfortaa};
    padding-bottom: 50px;
  `,
  typeContainer: styled.div`
    font-size: 14px;
    line-height: 16px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 12px;
  `,
  type: styled.div`
    color: red;
  `,
  date: styled.div`
    ${styles.manrope};
  `,
  title: styled.h2`
    font-weight: 700;
    font-size: 26px;
    line-height: 32px;
    padding-bottom: 10px;
  `,
  timeContainer: styled.div`
    display: flex;
    ${styles.manrope};
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    padding-bottom: 25px;
  `,
  time: styled.div``,
  portions: styled.div``,
  shortContent: styled.div`
    display: flex;
    padding-bottom: 18px;
  `,
  shortImgContainer: styled.div`
    width: 572px;
    & > img {
      width: 572px;
    }
    margin-right: 40px;
  `,
  describtion: styled.p`
    font-size: 16px;
    line-height: 27px;
    padding-bottom: 25px;
  `,
  ingridients: styled.p`
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    padding-bottom: 10px;
  `,
  listProducts: styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 220px;
    font-size: 16px;
    line-height: 27px;
  `,
  titleSteps: styled.h3`
    font-size: 25px;
    line-height: 30px;
  `,
  step: styled.div`
    display: flex;
    padding-top: 16px;
    & p {
      font-size: 22px;
      line-height: 33px;
      padding-left: 40px;
    }
  `,
  likesContainer: styled.div`
    display: flex;
    padding-bottom: 30px;
    & > div {
      font-size: 14px;
      line-height: 18px;
      padding-right: 38px;
    }
  `,
  author: styled.div`
    padding-top: 30px;
  `,
  space: styled(Space)`
    font-size: 17px;
    padding-right: 10px;
  `,
}

export default S
