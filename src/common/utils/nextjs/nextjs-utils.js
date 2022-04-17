
export const nextjsUtils = {
  createServerSideProps
};

function createServerSideProps(data, redirect) {
  return redirect ? {
    redirect: {
      destination: redirect
    }
  } : {
    props: {
      data
    }
  }
}

