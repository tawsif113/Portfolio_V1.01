import "./globals.css";

export const metadata = {
  title: "Alex Doe — Creative Developer",
  description:
    "Minimalist yet immersive portfolio showcasing creative engineering, interactive prototypes, and product craftsmanship.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
