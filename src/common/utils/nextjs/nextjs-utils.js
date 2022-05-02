
export const nextjsUtils = {
  createServerSideProps
};

function createServerSideProps(data, redirect, options) {
  // return the redirect if present
  if (redirect) {
    const redirect = {
      destination: redirect
    };

    return {
      redirect
    };
  }

  // create props
  const props = options.spread ? {
    ...data
  } : {
    data
  };

  return {
    props
  };
}

