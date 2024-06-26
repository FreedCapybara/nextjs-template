import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSession, getSession, signIn, signOut } from 'next-auth/react';
import { wrapper } from '@app/store';
import styles from './Sandbox.module.scss';

import { sandboxRequest, selectData, wait } from '@features/sandbox';
import { authorize, selectUser } from '@features/auth';

import { MainLayout } from '@components/MainLayout';
import { TwoPaneLayout } from '@components/TwoPaneLayout';
import { AvatarMenu } from '@components/AvatarMenu';
import { Emoji } from '@components/Emoji';
import { NavMenu } from '@components/NavMenu';
import { ProgressBar } from '@components/ProgressBar';
import { Swatch } from '@components/Swatch';
import { ToggleSwitch } from '@components/ToggleSwitch';
import { ValidatedInput } from '@components/ValidatedInput';
import { FormField } from '@components/FormField';

export function Sandbox(props) {

  const [toggleValue, setToggleValue] = useState(false);
  const [formValue, setFormValue] = useState('');

  const dispatch = useDispatch();

  const { data: session } = useSession();

  const user = useSelector(selectUser);
  const data = useSelector(selectData);

  return (
    <MainLayout title="Sandbox">
      <h1>hi {user.email}</h1>
      <button onClick={() => dispatch(wait())}>Load something</button>
      <button onClick={() => dispatch(sandboxRequest({ context: null }))}>Status code</button>
    </MainLayout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const { dispatch } = store;

  const authResult = await dispatch(authorize(context));
  return authResult.serverSideProps;

  // not necessary since `sandboxRequest` should redirect unauthorized users
  //const authResult = dispatch(authorize(context));

  //if (!authResult.authorized) {
    //return authResult.serverSideProps;
  //}

  //const dataResult = await dispatch(sandboxRequest({ context }));
  //return dataResult.payload.serverSideProps;

  //return {
    //props: {
      //session: await getSession(context)
    //}
  //};
});

