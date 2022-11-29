import React from 'react';
import ReactModalManager from '../../src/main';
import styled from 'styled-components';
import viteRequireContext from '@jswork/vite-require-context';
import '@jswork/next';

const Container = styled.div`
  width: 80%;
  margin: 30px auto 0;
`;

const moduleFiles = import.meta.globEager('./modals/*.jsx');
const context = viteRequireContext(moduleFiles);

export default () => {
  return (
    <Container>
      <ReactModalManager
        context={context}
        inject={(e) => {
          nx.$modal = e;
        }}>
        <button
          onClick={() => {
            nx.$modal.present('modal1');
          }}>
          MyModal
        </button>
      </ReactModalManager>
    </Container>
  );
};
