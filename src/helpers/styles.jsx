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

  button: css`
    text-decoration: none;
    color: var(--color-text-four);
    border: 1px solid var(--color-line-four);
    border-radius: 3px;
    margin: 4rem 0 0;
    padding: 1.25rem 1.75rem;
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      background-color: var(--hover-bg-button);
      color: var(--hover-text-button);
      border: 1px solid var(--hover-line-button);
    }
  `,

  pageCenter: css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `,
};

export default mixins;
