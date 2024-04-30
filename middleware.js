// import { authMiddleware } from "@clerk/nextjs";

// // This example protects all routes including api/trpc routes
// // Please edit this to allow other routes to be public as needed.
// // See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
// export default authMiddleware({
// 	publicRoutes: ["/(github|twitter|linkedin)"],
// 	ignoredRoutes: ["/", "/(api|trpc)(.*)"],
// 	clockSkewInMs: 100_000,
// 	clockSkewInSeconds: 100,
// });

// export const config = {
// 	matcher: ["/((?!.*\\..*|_next).*)", "/(dashboard)(.*)"],
// };

import { clerkMiddleware } from "@clerk/nextjs/server";

// This Middleware does not protect any routes by default.
// See https://clerk.com/docs/references/nextjs/clerk-middleware for more information about configuring your Middleware
export default clerkMiddleware({
	publicRoutes: ["/(github|twitter|linkedin)"],
	ignoredRoutes: ["/", "/(api|trpc)(.*)"],
	clockSkewInMs: 100_000,
	clockSkewInSeconds: 100,
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/(dashboard)(.*)"],
};
