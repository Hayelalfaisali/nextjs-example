export default async function PostDetails({ postsId }) {
  const postId = postsId;

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: { revalidate: 120 },
    }
  );
  const post = await response.json();

  return (
    <div
      style={{
        color: "black",
        width: "80%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        padding: "10px",
        border: "1px solid black",
        margin: "10px",
      }}
      key={post.id}
    >
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
