import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Signup | Xelaris",
  description: "Xelaris signup page",
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div>{children}</div>
}
