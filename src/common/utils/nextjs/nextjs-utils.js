
export const nextjsUtils = {
  createServerSideProps
};

function createServerSideProps(data, redirect, options) {
  return redirect ? {
    redirect: {
      destination: redirect
    }
  } : {
    props: options.spread ? {
      ...data
    } : {
      data
    }
  }
}

