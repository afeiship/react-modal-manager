import React from 'react';
import ReactModalManager from '../../src/main';
import styled from 'styled-components';
import { scanVite } from '@jswork/scan-modules';
import '@jswork/next';

const Container = styled.div`
  width: 80%;
  margin: 30px auto 0;
`;

const moduleFiles = import.meta.glob('./modals/*.jsx', { eager: true });
const modules = scanVite(moduleFiles, { modules: '/modals/' });

export default () => {
  return (
    <Container>
      <ReactModalManager modules={modules} harmony>
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
