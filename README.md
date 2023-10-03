
# Makaut_buddy

This project provides study material for college students. Where they can get videos,notes, and PYQ in one place for their semester exams.


## Quick start
1. Clone this repo using:
```
git clone https://github.com/Arindam200/makaut_buddy.git
```
2. To install dependencies and clean the git repo run:
```
npm install
```
###### or
you can also use ```yarn install ``` for it

3. For running the project we need to add .env file as we use some keys for the Clerk.






## Environment Variables

To run this project, you will need to add the .env file and add following environment variables 

`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`

`CLERK_SECRET_KEY`

You can get this by going to the clerk:```https://clerk.com/```
You need to log in to Clerk and then add the application. Then you will get both keys and paste them into the .env file.



# Running the project

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

