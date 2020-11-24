import React from 'react';
import {css} from '@emotion/react';
import flours from '../flours.json';

function Menu({ flours, selectBlend, menuToggle }) {

  return (
      <ul css={css`
        list-style: none;
        position: absolute;
        top: 100px;
        bottom: 100px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        background: var(--purple);
        width: 300px;
        left: 0;
        right: 0;
        border-radius: 20px 20px;
        z-index: -1;
        box-shadow: 0px 0px 24px 10px rgba(0,0,0,0.1);
        transform: ${menuToggle ? 'translateX(150%)' : 'translateX(0%)'};
        transition: all 0.25s;
      `}>
        {flours.flours.map(blend => {
          return (
            <li
              key={blend.key} 
              onClick={selectBlend}
              css={css`
                padding: 5px 20px;
                font-family: 'Chewy', cursive;
                text-align: right;
                font-size: 32px;
                color: var(--offwhite);
                cursor: pointer;
                &:hover {
                  color: var(--purple);
                }
              `}
            >
              {blend.recipe}
            </li>
          )
        })}
      </ul>
  )
}

Menu.defaultProps = {
  flours: flours
}

export default Menu;