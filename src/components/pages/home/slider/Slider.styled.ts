import styled from 'styled-components'
import { Carousel } from 'antd'
import { styles } from '../../../globalStyle'

const S = {
  container: styled(Carousel)`
    max-width: 1200px;
    margin: 0 auto 50px;
    @media (max-width: 1200px) {
      padding: 0 20px;
      margin-bottom: 30px;
    }
  `,
  content: styled.div`
    position: relative;
    height: 500px;
    border-radius: ${styles.radius};
    overflow: hidden;
    @media (max-width: 1200px) {
      height: 410px;
    }
    @media (max-width: 768px) {
      height: 210px;
    }
  `,
  textContent: styled.div`
    position: absolute;
    color: white;
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    margin: 0 auto;
    padding: 150px 25%;
    text-align: center;
    @media (max-width: 1200px) {
      padding: 110px 25%;
    }
    @media (max-width: 768px) {
      padding: 80px 15%;
    }
    & > h3 {
      ${styles.montserrat}
      font-size: 30px;
      line-height: 30px;
      padding-bottom: 15px;
      @media (max-width: 1200px) {
        font-size: 25px;
        line-height: 25px;
      }
    }
    & > p {
      ${styles.roboto}
      font-size: 20px;
      line-height: 30px;
      @media (max-width: 1200px) {
        font-size: 17px;
        line-height: 25px;
      }
      @media (max-width: 768px) {
        display: none;
      }
    }
  `,
  img: styled.img`
    margin-top: -10%;
    width: 100%;
    border-radius: 24px;
    @media (max-width: 768px) {
      margin-top: -15%;
    }
    @media (max-width: 468px) {
      margin-top: -5%;
    }
    @media (max-width: 400px) {
      max-width: 360px;
      width: auto;
    }
  `,
}

export default S
