import "./globals.css";
import cx from "classnames";
import { sfPro, inter } from "./fonts";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cx(sfPro.variable, inter.variable)} bg-cream`}>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          {children}
        </main>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.6/flowbite.min.js"></script>
      </body>
    </html>
  );
}
