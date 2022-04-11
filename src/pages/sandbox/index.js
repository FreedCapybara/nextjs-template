import React from 'react';
import { useDispatch } from 'react-redux';
import { wrapper } from '@app/store';
import styles from './sandbox.module.scss';

import { authenticatedRequestThunk, waitThunk } from '@features/sandbox';

import { MainLayout } from '@common/components/main-layout';
import { AvatarMenu } from '@common/components/avatar-menu';

function Sandbox(props) {
  const { data } = props;

  const dispatch = useDispatch();

  return (
    <MainLayout title="Sandbox">
      <h1>hi</h1>
      <button onClick={() => dispatch(waitThunk())}>Loading</button>
      <div>{JSON.stringify(data)}</div>
      <AvatarMenu email="andrew@spacegiraffe.io" align="right">
        <a>hello</a>
      </AvatarMenu>
    </MainLayout>
  );
}

/*export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {*/
  //const { dispatch } = store;
  //const data = await dispatch(authenticatedRequestThunk(context));
  //return {
    //props: {
      //data: data.payload
    //}
  //};
//});

export default Sandbox;

