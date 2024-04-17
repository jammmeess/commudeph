import React from "react";

const FifthSection = () => {
  const articles = [
    {
      id: 1,
      imgUrl:
        "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?q=80&w=1437&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Virtual Reality",
      title: "Article Title",
    },
    {
      id: 2,
      imgUrl:
        "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?q=80&w=1437&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Virtual Reality",
      title: "Article Title",
    },
    {
      id: 3,
      imgUrl:
        "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?q=80&w=1437&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Virtual Reality",
      title: "Article Title",
    },
  ];

  return (
    <section>
      <div className="container">
        <h2 className="fifth-heading">Section Heading</h2>
        <div className="content-fifth-section">
          {articles.map((article) => (
            <div className="article" key={article.id}>
              <img
                src={article.imgUrl}
                className="article-img"
                alt={article.alt}
              />
              <h4>{article.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
