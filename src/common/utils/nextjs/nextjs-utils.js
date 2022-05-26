
export const nextjsUtils = {
  createServerSideProps,
  createRedirect
};

function createServerSideProps(props) {
  return {
    props: props || {}
  };
}

function createRedirect(redirectUrl) {
  const redirect = {
    destination: redirectUrl
  };

  return {
    redirect
  };
}

