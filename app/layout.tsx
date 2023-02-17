import Header from "@/components/Header";
import "../styles/global.css";
import Providers from "./Providers";

export default function RootLayot({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head></head>
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
