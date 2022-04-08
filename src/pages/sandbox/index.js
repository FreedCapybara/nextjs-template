import React from 'react';
import { authenticatedRequestThunk } from '@features/sandbox';
import styles from './sandbox.module.scss';

function Sandbox(props) {
  const { data } = props;

  return (
    <div>{data}</div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps((store) => (context) => {
  const { dispatch } = store;
  dispatch(authenticatedRequestThunk(context));
});

export default Sandbox;

