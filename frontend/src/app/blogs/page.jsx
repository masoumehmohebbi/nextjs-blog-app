import { Suspense } from "react";
import PostList from "./_components/PostList";
import Spinner from "@/ui/Spinner";

const BlogPage = () => {
  return (
    <>
      <h1>hey</h1>
      <Suspense fallback={<Spinner />}>
        <PostList />
      </Suspense>
    </>
  );
};

export default BlogPage;
