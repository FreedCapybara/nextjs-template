import React from 'react';
import { wrapper } from '@app/store';
import { authenticatedRequestThunk } from '@features/sandbox';
import styles from './sandbox.module.scss';

function Sandbox(props) {
  const { data } = props;

  return (
    <div>{JSON.stringify(data)}</div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const { dispatch } = store;
  const data = await dispatch(authenticatedRequestThunk(context));
  return {
    props: {
      data: data.payload
    }
  };
});

export default Sandbox;

