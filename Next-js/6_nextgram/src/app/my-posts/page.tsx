import { getUserPosts } from "@/actions";
import { auth } from "auth";
import { redirect } from "next/navigation";

const MyPostsPage: React.FC = async () => {
  const session = await auth();

  let userId = null;

  if (session) {
    userId = session.user.userId;
  } else {
    redirect("/");
  }

  const posts = await getUserPosts(userId);

  return (
    <div className="flex min-h-screen items-center flex-col text-black font-sans">
      {posts.map((post) => (
        <p key={post.id}>{post.caption}</p>
      ))}
    </div>
  );
};

export default MyPostsPage;
