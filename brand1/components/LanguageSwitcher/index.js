import styled, { css } from 'styled-components'

import OriginalLanguageSwitcher from 'common/components/LanguageSwitcher';

const LanguageSwitcher = styled(OriginalLanguageSwitcher)`
  && {
    li {
      &.active {
        border-color: dodgerblue;
      }
    }
  }
`

export default LanguageSwitcher;