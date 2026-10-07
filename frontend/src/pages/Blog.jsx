function Blog() {
  const posts = [
    {
      title: "Getting Started with React JS",
      date: "October 2026",
      description:
        "Learn the fundamentals of React components, JSX, props and state.",
    },
    {
      title: "Why Responsive Web Design Matters",
      date: "October 2026",
      description:
        "Understand how responsive design creates better experiences across devices.",
    },
    {
      title: "Introduction to Node JS",
      date: "October 2026",
      description:
        "Explore the basics of backend development using Node JS and APIs.",
    },
  ];

  return (
    <main className="blog-page">

      <section className="blog-header">
        <p className="section-label">MY BLOG</p>
        <h1>Latest Articles</h1>
        <p>
          Thoughts, tutorials and useful information about web development
          and technology.
        </p>
      </section>

      <section className="blog-grid">
        {posts.map((post, index) => (
          <article className="blog-card" key={index}>
            <div className="blog-image">Blog {index + 1}</div>

            <div className="blog-info">
              <span>{post.date}</span>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <button>Read More</button>
            </div>
          </article>
        ))}
      </section>

    </main>
  );
}

export default Blog;
