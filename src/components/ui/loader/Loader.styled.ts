import { LoadingOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { styles } from '../../globalStyle'

const S = {
  backdrop: styled.div`
    ${styles.backdrop};
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
