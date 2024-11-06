import { Suspense } from "react";
import Spinner from "@/ui/Spinner";
import PostList from "../_components/PostList";

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
