import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

let projects = [
  {
    name: "sample name",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque doloribus quasi, debitis fugit quo dolorem deleniti quidem voluptatibus architecto voluptas? Error dolores unde ex minus maiores explicabo quod ab qui, repellat, quae maxime. Molestiae, consequatur. Quas alias enim libero eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque doloribus quasi, debitis fugit quo dolorem deleniti quidem voluptatibus architecto voluptas? Error dolores unde ex minus maiores explicabo quod ab qui, repellat, quae maxime. Molestiae, consequatur. Quas alias enim libero eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque doloribus quasi, debitis fugit quo dolorem deleniti quidem voluptatibus architecto voluptas? Error dolores unde ex minus maiores explicabo quod ab qui, repellat, quae maxime. Molestiae, consequatur. Quas alias enim libero eveniet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque doloribus quasi, debitis fugit quo dolorem deleniti quidem voluptatibus architecto voluptas? Error dolores unde ex minus maiores explicabo quod ab qui, repellat, quae maxime. Molestiae, consequatur. Quas alias enim libero eveniet.",
    githublink: "githublink",
    livelink: "egtsetloda",
    startdate: "12-1-20",
    enddate: "12-1-212",
    techstack: ["html", "css", "js", "node", "mongodb", "html", "css", "js"],
    image:
      "https://i.picsum.photos/id/931/220/250.jpg?hmac=37E4_2yVB_qQrDBsjTvs0wIPOL_WZsf5JkKSnBLgo-U",
  },

  {
    name: "sample name 2",
    description: "sample desc",
    githublink: "githublasdasdadink",
    livelink: "livelink",
    startdate: "12-1-20",
    enddate: "12-1-212",
    techstack: ["html", "css", "js", "node", "mongodb"],
    image:
      "https://i.picsum.photos/id/931/220/250.jpg?hmac=37E4_2yVB_qQrDBsjTvs0wIPOL_WZsf5JkKSnBLgo-U",
  },
  {
    name: "sample name 3",
    description: "sample desc",
    githublink: "githublink",
    livelink: "asdad",
    startdate: "12-1-20",
    enddate: "12-1-212",
    techstack: ["html", "css", "js", "node", "mongodb"],
    image:
      "https://i.picsum.photos/id/931/220/250.jpg?hmac=37E4_2yVB_qQrDBsjTvs0wIPOL_WZsf5JkKSnBLgo-U",
  },
  {
    name: "sample name 4",
    description: "sample desc",
    githublink: "githublink",
    livelink: "adadasdasda",
    startdate: "12-1-20",
    enddate: "12-1-212",
    techstack: ["html", "css", "js", "node", "mongodb"],
    image:
      "https://i.picsum.photos/id/931/220/250.jpg?hmac=37E4_2yVB_qQrDBsjTvs0wIPOL_WZsf5JkKSnBLgo-U",
  },
  {
    name: "sample name 5",
    description: "sample desc",
    githublink: "asdasdadsad",
    livelink: "livelink",
    startdate: "12-1-20",
    enddate: "12-1-212",
    techstack: ["html", "css", "js", "node", "mongodb"],
    image:
      "https://i.picsum.photos/id/931/220/250.jpg?hmac=37E4_2yVB_qQrDBsjTvs0wIPOL_WZsf5JkKSnBLgo-U",
  },
];

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);

  const [data, setdata] = useState([]);

  useEffect(() => {
    for (var i = 0; i < projects.length; i++) {
      if (projects[i].name == slug) setdata(projects[i]);
    }
  }, []);

  console.log(data);

  return (
    <section className="text-white body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="project_image"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={data.image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-slate-50 text-3xl title-font font-medium mb-1 ">
              {data.name}
            </h1>
            <div className="flex mb-4">
              <span className="text-purple-900 flex items-center">
                {data.startdate} - {data.enddate}
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
            <p className="leading-relaxed">{data.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex flex-wrap ">
                {/* {data.techstack.map((item, index) => {
                  return (
                    <span
                      key={index}
                      className="flex items-center px-5 bg-blue-400 rounded m-1 text-white"
                    >
                      {item}
                    </span>
                  );
                })} */}

                {/* <span className="flex items-center px-5 bg-yellow-700 rounded m-1 text-white">
                  Tailwind
                </span>
                <span className="flex items-center px-5 bg-blue-400 rounded m-1 text-white">
                  Tailwind
                </span>
                <span className="flex items-center px-5 bg-pink-400 rounded m-1 text-white">
                  Tailwind
                </span>
                <span className="flex items-center px-5 bg-teal-400 rounded m-1 text-white">
                  Tailwind
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// export async function getServerSideProps(context) {
//   let headers = {
//     Authorization:
//       "Bearer 23d0e366c6479ab7e52a182aacea18d843c4495b8ef1b29011e83e632cc547ad3ee1d2dd3d522a96e2bf35e64a0fe80694238344ab3846479abc1a57856090a35f393765ad1e240776a994fddebe095b393f5bad510c514be6c11d70d91c95abdc84882cf81c3d1878d1f61c30d60e5a46abdc6ed2ee6172ac2b19b9999ee22f",
//   };
//   let res = await fetch(
//     "http://localhost:1337/api/projects?filters[slug]=" +
//       context.query.slug +
//       "&populate=*",
//     {
//       headers: headers,
//     }
//   );
//   let project = await res.json();
//   return {
//     props: { project: project }, // will be passed to the page component as props
//   };
// }

export default Slug;
