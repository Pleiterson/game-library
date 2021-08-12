import { css } from 'styled-components';

const mixins = {
  flexCenter: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  flexBetween: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  flexWrapFlow: css`
    display: flex;
    flex-wrap: wrap;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;
  `,
};

export default mixins;
