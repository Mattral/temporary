import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}

/*
// PROJECT IMPORTS
import GuestGuard from 'utils/route-guard/GuestGuard';
import { ClerkProvider } from "@clerk/nextjs";

// ==============================|| AUTH LAYOUT ||============================== //

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ClerkProvider><GuestGuard>{children}</GuestGuard></ClerkProvider>;
}
*/
