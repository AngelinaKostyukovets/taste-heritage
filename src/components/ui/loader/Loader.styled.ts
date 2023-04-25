import { LoadingOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const S = {
  backdrop: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: grey;
    opacity: 0.5;
  `,
  loaderContainer: styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  `,
  loader: styled(LoadingOutlined)`
    font-size: 40px;
  `,
}

export default S
