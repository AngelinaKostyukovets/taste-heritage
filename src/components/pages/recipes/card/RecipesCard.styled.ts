import styled from 'styled-components'

const S = {
  container: styled.div`
    max-width: 446px;
    border-radius: 24px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `,
  image: styled.div`
    & img {
      width: 100%;
      border-radius: 24px 24px 0px 0px;
    }
  `,
  textContent: styled.div`
    padding: 20px 25px;
  `,
  describtion: styled.p`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
  `,
  category: styled.p`
    font-family: 'Comfortaa', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #ff0000;
    padding-bottom: 15px;
  `,
  title: styled.h3`
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 22px;
    padding-bottom: 15px;
  `,
}

export default S
