import { ReactNode } from 'react';

// Since we have a `[locale]` layout, this root layout is just a shell
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
