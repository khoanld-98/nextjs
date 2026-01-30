
import NavMenuHome from "@/src/component/home/NavMenuHome";
import FooterLayout from "@/src/component/home/FooterLayout";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
       <NavMenuHome />
        <div className="h-screen w-screen">
            <div className="w-full">
                {children}
                <FooterLayout />
            </div>
        </div>
    </div>
  );
}
