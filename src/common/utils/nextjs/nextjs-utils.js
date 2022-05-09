
export const nextjsUtils = {
  createServerSideProps
};

function createServerSideProps(data, redirectUrl, options) {
  // return the redirect if present
  if (redirectUrl) {
    const redirect = {
      destination: redirectUrl
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

