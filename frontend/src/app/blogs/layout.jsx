import CategoryList from "./_components/CategoryList";

export const metadata = {
  title: "بلاگ ها",
};
const Layout = ({ children }) => {
  return (
    <div>
      <h1 className="text-lg font-bold mb-12">لیست بلاگ ها</h1>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 xl:col-span-3 space-y-4 text-secondary-500">
          <CategoryList />
        </div>
        <div className="col-span-12 lg:col-span-8 xl:col-span-9">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
