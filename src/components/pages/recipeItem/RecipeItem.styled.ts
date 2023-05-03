import styled from 'styled-components'
import { Space } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { styles } from '../../globalStyle'

const S = {
  container: styled.div`
    ${styles.container};
    ${styles.comfortaa};
    padding: 0 20px 50px;
    @media (max-width: 1200px) {
      padding-bottom: 30px;
    }
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
    text-transform: capitalize;
  `,
  date: styled.div`
    ${styles.manrope};
  `,
  title: styled.h2`
    font-weight: 700;
    font-size: 26px;
    line-height: 32px;
    padding-bottom: 10px;
    @media (max-width: 1200px) {
      font-size: 20px;
      line-height: 26px;
    }
  `,
  timeContainer: styled.div`
    display: flex;
    ${styles.manrope};
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    padding-bottom: 25px;
    @media (max-width: 1200px) {
      padding-bottom: 15px;
    }
  `,
  time: styled.div`
    font-size: 14px;
    line-height: 18px;
    padding-right: 38px;
  `,
  portions: styled.div`
    font-size: 14px;
    line-height: 18px;
  `,
  shortContent: styled.div`
    display: flex;
    padding-bottom: 18px;
    @media (max-width: 1200px) {
      flex-direction: column;
    }
  `,
  shortImgContainer: styled.div`
    width: 572px;

    & > img {
      width: 572px;
      @media (max-width: 1200px) {
        width: 100%;
      }
    }
    margin-right: 40px;
    @media (max-width: 1200px) {
      width: 100%;
    }
  `,
  describtion: styled.p`
    font-size: 16px;
    line-height: 27px;
    padding-bottom: 25px;
    @media (max-width: 1200px) {
      padding-bottom: 15px;
    }
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
    @media (max-width: 1200px) {
      height: 100%;
    }
  `,
  titleSteps: styled.h3`
    font-size: 25px;
    line-height: 30px;
    @media (max-width: 1200px) {
      font-size: 22px;
      line-height: 26px;
    }
  `,
  step: styled.div`
    display: flex;
    padding-top: 16px;
    @media (max-width: 768px) {
      flex-direction: column;
      padding-top: 10px;
    }
    & img {
      @media (max-width: 1200px) {
        width: 420px;
      }
      @media (max-width: 768px) {
        width: 100%;
        padding-bottom: 10px;
      }
    }
    & p {
      font-size: 22px;
      line-height: 33px;
      padding-left: 40px;
      @media (max-width: 1200px) {
        padding-left: 20px;
        font-size: 18px;
        line-height: 24px;
      }
      @media (max-width: 768px) {
        padding-left: 0;
      }
    }
  `,
  likesContainer: styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 30px;
    @media (max-width: 1200px) {
      padding-bottom: 20px;
    }
    & > div {
      font-size: 14px;
      line-height: 18px;
      padding-right: 38px;
    }
  `,
  author: styled.div`
    padding-top: 30px;
    @media (max-width: 1200px) {
      padding-top: 20px;
    }
  `,
  space: styled(Space)`
    font-size: 17px;
    padding-right: 10px;
  `,
  icon: styled(FontAwesomeIcon)`
    font-size: 17px;
    padding-right: 10px;
  `,
}

export default S
