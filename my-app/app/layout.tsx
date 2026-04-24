import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return(
    <html>
      <body>
        <nav style= {{ marginBottom: "20px" }}>
          <Link href="/">Home</Link> | {" "}
          <Link href="/about">About</Link> | {" "}
          <Link href="/projects">Projects</Link> | {" "}
          <Link href="/contact">Contact</Link>

        </nav>
        {children}
      </body>
    </html>
  )
}