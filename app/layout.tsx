import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export default function Layout({ children }: IProps) {
  return (
    <html lang="en">
      <head>
        <title>Expenses Chart Component - Frontend Mentor - Tuan Nguyen</title>
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
