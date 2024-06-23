import "./globals.css";

export const metadata = {
  title: "Next.js Resume Form",
  description: "A resume form built with Next.js and Firebase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
        <nav className="bg-white shadow p-4">
          <ul className="flex justify-end space-x-4">
            <li>
              <a href="/register" className="text-blue-500 hover:text-blue-700">
                Register
              </a>
            </li>
            <li>
              <a href="/careers" className="text-blue-500 hover:text-blue-700">
                Careers
              </a>
            </li>
          </ul>
        </nav>
        <main className="flex-grow flex items-center justify-center p-6">
          <div className="max-w-3xl w-full">{children}</div>
        </main>
      </body>
    </html>
  );
}
