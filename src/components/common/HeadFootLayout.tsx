import { Footer } from "./Footer";
import { Header } from "./Header";

export const HeadFootLayout = ({
  children,
  title,
  prev,
}: Readonly<{ children: React.ReactNode; title: string; prev?: boolean }>) => {
  return (
    <div className="flex flex-col">
      <Header title={title} prev={prev} />
      <div className="flex flex-col justify-evenly h-[calc(100vh-108px)] mt-11 mb-16 overflow-y-auto scrollbar-hide">
        {children}
      </div>
      <Footer />
    </div>
  );
};
