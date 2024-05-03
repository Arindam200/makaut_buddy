import { clerkMiddleware , createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
}, 
{ 
  clockSkewInMs: 100_000,
	clockSkewInSeconds: 100
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)", "/(dashboard)(.*)","/(login)(.*)","/(join)(.*)","/(onboarding)(.*)"],
};

