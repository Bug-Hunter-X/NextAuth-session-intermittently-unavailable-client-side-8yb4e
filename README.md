# NextAuth Session Intermittently Unavailable Client-Side

This repository demonstrates a bug where a NextAuth session is inconsistently available on the client-side after successful login. The session object is populated correctly on the server, but can be null or undefined on the client.  This behaviour is sporadic and difficult to reliably reproduce.

## Steps to Reproduce

1. Clone the repository.
2. Run `npm install`.
3. Set up a NextAuth provider (e.g., using credentials, email, etc.).  Refer to the NextAuth documentation for setup instructions.
4. Run `npm run dev`.
5. Log in to the application.
6. Observe that the `/about` page may display the session data correctly, or display `Access denied. Please log in.` even when successfully logged in.

## Expected Behavior

The session object should always be available on the client-side after successful login.

## Actual Behavior

The session object is sometimes available, and sometimes null or undefined, even after a successful login.

## Additional Notes

* This bug is particularly difficult to debug due to its intermittent nature.  It may work fine for several attempts, then start consistently failing.
* There are no apparent patterns to trigger the failure.
* It has been tested with multiple NextAuth providers with the same unreliable results.

This bug is likely related to the way NextAuth handles session persistence and the interaction with Next.js's data fetching mechanisms.  Further investigation is needed to identify the root cause.