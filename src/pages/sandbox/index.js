import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { wrapper } from '@app/store';
import styles from './Sandbox.module.scss';

import { authenticatedRequestThunk, waitThunk } from '@features/sandbox';

import { MainLayout } from '@components/MainLayout';
import { TwoPaneLayout } from '@components/TwoPaneLayout';
import { AvatarMenu } from '@components/AvatarMenu';
import { Emoji } from '@components/Emoji';
import { NavMenu } from '@components/NavMenu';
import { ProgressBar } from '@components/ProgressBar';
import { Swatch } from '@components/Swatch';
import { ToggleSwitch } from '@components/ToggleSwitch';
import { ValidatedInput } from '@components/ValidatedInput';

function Sandbox(props) {
  const { data } = props;

  const [toggleValue, setToggleValue] = useState(false);
  const [formValue, setFormValue] = useState('');

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
      <NavMenu>
        <a>hello</a>
      </NavMenu>
      <ProgressBar progress={.35} />
      <Swatch color={19}>
        Hello
      </Swatch>
      <ToggleSwitch value={toggleValue} onChange={(newValue) => setToggleValue(newValue)} />
      <ValidatedInput value={formValue} onChange={(newValue) => setFormValue(newValue)} isValid={formValue === 'hello'} showSuccess={true} />
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

