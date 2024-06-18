import NextAuth from "next-auth"

import { authOptions } from '@app/auth';

export default NextAuth(authOptions);

