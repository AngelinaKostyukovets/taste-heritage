import styled from 'styled-components'

const S = {
  container: styled.div`
    max-width: 1400px;
    margin: 0 auto;
  `,
  title: styled.h2`
    font-family: 'Comfortaa', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 46px;
    line-height: 51px;
  `,
  sortContainer: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  cards: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, max(446px));
    grid-column-gap: 30px;
    grid-row-gap: 20px;
  `,
}

export default S
