import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';

const options = {
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
      scope: 'email,public_profile,user_messenger_contact',
      httpOptions: {
        timeout: 5000,
      },
    }),
  ],
};
console.log(1000, options);
export default (req, res) => NextAuth(req, res, options)
