import styled from 'styled-components'
import { Space } from 'antd'
import { styles } from '../../../globalStyle'

const S = {
  container: styled.div`
    border-radius: ${styles.radius};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: relative;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.2);
    }
  `,
  image: styled.div`
    & img {
      width: 100%;
      border-radius: ${styles.radius} ${styles.radius} 0px 0px;
    }
  `,
  textContent: styled.div`
    padding: 20px 25px 60px;
  `,
  describtion: styled.p`
    ${styles.roboto}
    font-size: 14px;
    line-height: 16px;
  `,
  category: styled.p`
    ${styles.comfortaa};
    font-size: 14px;
    line-height: 16px;
    color: #ff0000;
    padding-bottom: 15px;
    text-transform: capitalize;
  `,
  title: styled.h3`
    ${styles.montserrat}
    font-size: 24px;
    line-height: 22px;
    padding-bottom: 15px;
    @media (max-width: 1200px) {
      font-size: 20px;
    }
  `,
  space: styled(Space)`
    position: absolute;
    left: 25px;
    bottom: 20px;
    font-size: 18px;
  `,
  number: styled.div`
    font-size: 16px;
    padding-right: 15px;
  `,
}

export default S
