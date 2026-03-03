import { headers } from "next/headers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<>
<h1>hello</h1>
 {children}
   </>
      
  );
}
