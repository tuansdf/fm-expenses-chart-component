import { ReactNode } from "react";
import { primaryFont } from "/app/fonts";
import "/styles/globals.css";

interface IProps {
  children: ReactNode;
}

export default function Layout({ children }: IProps) {
  return (
    <html lang="en">
      <head>
        <title>Expenses Chart Component - Frontend Mentor - Tuan Nguyen</title>
      </head>
      <body
        className={
          primaryFont.className +
          " flex min-h-screen flex-col items-center justify-center bg-cream text-lg"
        }
      >
        <main className="w-full max-w-sm">{children}</main>
      </body>
    </html>
  );
}
