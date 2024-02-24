import React from "react";
// import Heading from "../Shared/Heading";

// import images
// import Img1 from "../../assets/blogs/blog-1.jpg";
// import Img2 from "../../assets/blogs/blog-2.jpg";
// import Img3 from "../../assets/blogs/blog-3.jpg";
import AllPickles from "../../assets/images/allpickles.png";
import Img1 from "../../assets/images/img1.png";

const BlogData = [
  {
    title: "Dumka unique and handmade achar",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
    published: "Jan 20, 2024",
    image: Img1,
    aosDelay: "0",
  },
  {
    title: "Dumka unique and handmade achar",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
    published: "Jan 20, 2024",
    image: Img1,
    aosDelay: "200",
  },
  {
    title: "Dumka unique and handmade achar",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
    published: "Jan 20, 2024",
    image: Img1,
    aosDelay: "400",
  },
];
const Blogs = () => {
  return (
    <div className="my-12 mx-5">
      <div className="px-10">
        {/* Header section */}
        {/* <Heading title="Recent News" subtitle={"Explore Our Blogs"} /> */}
        <div className="text-center mb-10 max-w-[600px] mx-auto space-y-2">
          <h1 className="text-4xl font-bold lg:text-5xl">Recent News</h1>
          <p className="text-s text-gray-400">"Explore Our Blogs"</p>
        </div>

        {/* Blog section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-28">
          {/* Blog card */}
          {BlogData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.title}
              className="bg-white dark:bg-gray-900"
            >
              {/* image section */}
              <div className="overflow-hidden rounded-2xl mb-2">
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                />
              </div>
              {/* content section */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500">{data.published}</p>
                <p className="font-bold line-clamp-1">{data.title}</p>
                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                  {data.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
