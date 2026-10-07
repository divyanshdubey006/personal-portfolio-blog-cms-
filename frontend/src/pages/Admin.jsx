import { useState } from "react";

function Admin() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Getting Started with React JS",
      status: "Published",
    },
    {
      id: 2,
      title: "Introduction to Node JS",
      status: "Draft",
    },
  ]);

  const [title, setTitle] = useState("");

  const addPost = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    const newPost = {
      id: Date.now(),
      title: title,
      status: "Draft",
    };

    setPosts([...posts, newPost]);
    setTitle("");
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <main className="admin-page">

      <div className="admin-header">
        <div>
          <p className="section-label">CMS</p>
          <h1>Admin Dashboard</h1>
          <p>Manage your portfolio and blog content.</p>
        </div>

        <div className="admin-badge">
          Admin
        </div>
      </div>

      <section className="admin-stats">

        <div className="stat-card">
          <span>Total Posts</span>
          <strong>{posts.length}</strong>
        </div>

        <div className="stat-card">
          <span>Published</span>
          <strong>
            {posts.filter((post) => post.status === "Published").length}
          </strong>
        </div>

        <div className="stat-card">
          <span>Drafts</span>
          <strong>
            {posts.filter((post) => post.status === "Draft").length}
          </strong>
        </div>

      </section>

      <section className="admin-content">

        <div className="admin-form-card">
          <h2>Create New Post</h2>

          <form onSubmit={addPost}>
            <input
              type="text"
              placeholder="Enter post title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <button type="submit">
              Add Post
            </button>
          </form>
        </div>

        <div className="posts-card">
          <h2>Manage Posts</h2>

          {posts.map((post) => (
            <div className="post-row" key={post.id}>

              <div>
                <h3>{post.title}</h3>
                <span>{post.status}</span>
              </div>

              <button onClick={() => deletePost(post.id)}>
                Delete
              </button>

            </div>
          ))}
        </div>

      </section>

    </main>
  );
}

export default Admin;
