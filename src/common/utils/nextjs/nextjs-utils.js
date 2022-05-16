
export const nextjsUtils = {
  createServerSideProps,
  createRedirect
};

function createServerSideProps(data, options) {
  // create props
  const props = options?.spread ? {
    ...data
  } : {
    data
  };

  return {
    props
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

