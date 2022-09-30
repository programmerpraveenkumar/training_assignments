import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

function Blog() {
  let blogList = [
    {
      image: "images/new-chills.png",
      title: "NEW CHILLS FOR SUMMER",
      date: "By Admin on November 28, 2023",
      content:
        "You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template.",
    },
    {
      image: "images/berries.png",
      title: "BERRIES ON THE GROVE",
      date: "By Admin on November 29, 2023",
      content:
        "This is a different paragraph of content. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template.",
    },
  ];
  return (
    <>
      <Header currentMenu="blog" />
      <div id="body">
        <div className="header">
          <div>
            <h1>Blog</h1>
          </div>
        </div>
        <div className="blog">
          <div className="featured">
            <ul>
              {blogList.map((object, index) => {
                return (
                  <li>
                    <img src={object.image} alt="" />
                    <div>
                      <h1>{object.title}</h1>
                      <span>{object.date}</span>
                      <p>{object.content}</p>
                      <a href="singlepost.html" className="more">
                        Read More
                      </a>
                    </div>
                  </li>
                );
              })}
              {/* <li>
                <img src="images/new-chills.png" alt="" />
                <div>
                  <h1>NEW CHILLS FOR SUMMER</h1>
                  <span>By Admin on November 28, 2023</span>
                  <p>
                    You can replace all this text with your own text. You can
                    remove any link to our website from this website template,
                    you're free to use this website template without linking
                    back to us. If you're having problems editing this website
                    template.
                  </p>
                  <a href="singlepost.html" className="more">
                    Read More
                  </a>
                </div>
              </li>
              <li>
                <img src="images/berries.png" alt="" />
                <div>
                  <h1>BERRIES ON THE GROVE</h1>
                  <span>By Admin on November 28, 2023</span>
                  <p>
                    You can replace all this text with your own text. You can
                    remove any link to our website from this website template,
                    you're free to use this website template without linking
                    back to us. If you're having problems editing this website
                    template.
                  </p>
                  <a href="singlepost.html" className="more">
                    Read More
                  </a>
                </div>
              </li> */}
            </ul>
            <a href="blog.html" className="load">
              Load More
            </a>
          </div>
          <div className="sidebar">
            <h1>Recent Posts</h1>
            <img src="images/on-diet.png" alt="" />
            <h2>ON THE DIET</h2>
            <span>By Admin on November 28, 2023</span>
            <p>
              You can replace all this text with your own text. You can remove
              any link to our website from this website template.
            </p>
            <a href="singlepost.html" className="more">
              Read More
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
