import CursorSpotlight from "./CursorSpotlight";

export default function SpotlightContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative z-10">
      <CursorSpotlight />
      <div className="relative z-20 flex flex-col md:flex-row w-full h-full min-h-screen">
        {children}
      </div>
    </div>
  );
}
