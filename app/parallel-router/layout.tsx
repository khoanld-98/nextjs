export default function ParallelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <div className="flex justify-center items-center min-h-screen bg-gray-100 h-full w-full">
    <section className="w-full">{ children }</section>
  </div>
  );
}