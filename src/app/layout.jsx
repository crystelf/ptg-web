import { Provider } from "@/components/ui/provider";

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

export const metadata = {
  title: "PTG-大疆无人机电池改装",
};
