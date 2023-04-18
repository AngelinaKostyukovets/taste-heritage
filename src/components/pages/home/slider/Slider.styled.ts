import styled from 'styled-components'
import { Carousel } from 'antd'

const S = {
  container: styled(Carousel)`
    max-width: 1200px;
    margin: 50px auto;
  `,
  content: styled.div`
    position: relative;
    height: 500px;
    border-radius: 24px;
    overflow: hidden;
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
    & > h3 {
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
      line-height: 30px;
      padding-bottom: 15px;
    }
    & > p {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 30px;
    }
  `,
  img: styled.img`
    margin-top: -10%;
    width: 100%;
    border-radius: 24px;
  `,
}

export default S
