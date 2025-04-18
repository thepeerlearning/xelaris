import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Parent signup | Xelaris",
  description: "Xelaris parent signup page",
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div>{children}</div>
}
