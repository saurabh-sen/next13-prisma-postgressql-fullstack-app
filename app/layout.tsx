import './globals.css'

export const metadata = {
  title: "Next13 + prisma + Postgres + Tailwind",
  description: 'A starter kit for Next.js 13 with Prisma, Postgres, and Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
