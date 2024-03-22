import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Offer from "@/components/Offer/Offer";

export const metadata: Metadata = {
  title: "آکادمی آموزشی دیپ لرن",
  description: "مرجع برگزاری دوره های آموزشی در تمامی زمینه ها، رشته ها و سطوح",
  keywords:
    "آموزش، آموزش آنلاین، دوره های آموزشی، آکادمی، تدریس، یادگیری، زبان، برنامه نویسی، آشپزی، موسیقی، طراجی، عکاسی",
  icons: {
    icon: ["/acicon.png?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body>
        <Offer />
        <Header />
        {children}
      </body>
    </html>
  );
}
