import React from 'react';
import { useDispatch } from 'react-redux';
import { wrapper } from '@app/store';
import styles from './sandbox.module.scss';

import { authenticatedRequestThunk, waitThunk } from '@features/sandbox';

import { MainLayout } from '@components/main-layout';
import { TwoPaneLayout } from '@components/two-pane-layout';
import { AvatarMenu } from '@components/avatar-menu';
import { Emoji } from '@components/emoji';

function Sandbox(props) {
  const { data } = props;

  const dispatch = useDispatch();

  return (
    <TwoPaneLayout title="Sandbox">
      <h1>hi</h1>
      <button onClick={() => dispatch(waitThunk())}>Load something</button>
      <div>{JSON.stringify(data)}</div>
      <AvatarMenu email="andrew@spacegiraffe.io" align="right">
        <a>hello</a>
      </AvatarMenu>
      <Emoji>&#x1f680;</Emoji>
    </TwoPaneLayout>
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

