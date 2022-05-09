import styles from './Home.module.scss';

export function Home(props) {
  const { data } = props;

  return (
    <h1>Home {data}</h1>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      data: 'hi'
    }
  };
}

