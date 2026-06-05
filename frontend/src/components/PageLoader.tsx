const PageLoader = () => {
  return (
    <div className="w-full min-h-screen pt-24 pb-12 px-4 md:px-8 max-w-6xl mx-auto flex flex-col space-y-8 animate-pulse">
      <div className="h-12 bg-muted rounded-lg w-1/3 max-w-[250px]"></div>
      <div className="space-y-4">
        <div className="h-4 bg-muted rounded w-full"></div>
        <div className="h-4 bg-muted rounded w-5/6"></div>
        <div className="h-4 bg-muted rounded w-4/6"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
        <div className="h-64 bg-muted rounded-xl w-full"></div>
        <div className="h-64 bg-muted rounded-xl w-full"></div>
        <div className="h-64 bg-muted rounded-xl w-full"></div>
      </div>
    </div>
  );
};

export default PageLoader;
