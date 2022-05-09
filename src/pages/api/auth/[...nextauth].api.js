import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import url from 'url';

export default NextAuth({
  pages: {
    signIn: '/login',
    signOut: '/login',
    error: '/server-error'
  },
  session: {
    maxAge: 16 * 60 * 60 // 16 hours, in seconds
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
    // ...add more providers here
  ],
  callbacks: {
    // See https://next-auth.js.org/configuration/callbacks#redirect-callback
    redirect({ url: requestUrl, baseUrl }) {

      const parsedUrl = url.parse(requestUrl, true);
      const callbackUrl = parsedUrl.query.callbackUrl || requestUrl;

      if (callbackUrl.startsWith('/')) {
        // allow relative callback URLs
        return `${baseUrl}${callbackUrl}`;
      } else if (new URL(callbackUrl).origin === baseUrl) {
        // allow callback URLs on the same origin
        return callbackUrl;
      }

      return baseUrl;
    }
  }
});

