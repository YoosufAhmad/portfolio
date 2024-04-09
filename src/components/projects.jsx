import projectpic1 from "../images/projectpic1.jpg";
import projectpic2 from "../images/projectpic2.jpg";
const Projects = () => {
  return (
    <div className="space-y-6 pb-10">
      <div class="max-w-sm sm:max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl xl:max-w-4xl">
        <div class="md:flex relative">
          <div class="md:shrink-0 overflow-hidden">
            <img
              src={projectpic1}
              alt="coffee picture by farza mohamadi "
              className="object-cover md:max-w-xs hover:scale-110 transition duration-500 cursor-pointer"
            />
          </div>
          <div class="p-8 flex-col">
            <div class="uppercase tracking-wide text-sm text-amber-800 font-semibold">
              Full-Stack Project
            </div>
            <a
              href="https://coffee-news-nc.netlify.app"
              target="_blank"
              class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Coffee News (Front-End)
            </a>
            <p class="mt-2 text-slate-700">
              Welcome to Coffee News! Coffee News is a social news aggregation
              app similar to Reddit. It's been tailored to give you the perfect
              amount of news while you sip over your coffee in the morning,
              allowing you to scroll till you finish your coffee.
            </p>
            <p className="pt-4 text-amber-950 font-medium">
              React - JavaScript - Axios
            </p>
            <a
              href="https://coffee-news-nc.netlify.app"
              target="_blank"
              className="block text-1xl text-center mt-16 px-4 py-2 bg-amber-950 text-white rounded-md md:hover:bg-amber-900"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/YoosufAhmad/nc-news"
              target="_blank"
              className="block text-1xl text-center my-2 px-4 py-2 bg-amber-950 text-white rounded-md md:hover:bg-amber-900"
            >
              Code
            </a>
          </div>
        </div>
      </div>

      <div class="max-w-sm sm:max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl xl:max-w-4xl">
        <div class="md:flex relative">
          <div class="md:shrink-0 overflow-hidden">
            <img
              src={projectpic2}
              alt="coffee and newspaper picture by celine ylmz"
              className="object-cover md:max-w-xs hover:scale-110 transition duration-500 cursor-pointer"
            />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-amber-800 font-semibold">
              Full-Stack Project
            </div>
            <a
              href="https://coffeenews.onrender.com/api/"
              target="_blank"
              class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Coffee News (Back-End)
            </a>
            <p class="mt-2 text-slate-700">
              Created following TDD via unit and integration testing.
              Implemented CRUD operations and RESTful API principles. Key
              features include: View all articles or a single article, delete or
              create an article, post comment, and like an article.
            </p>
            <p className="pt-4 text-amber-950 font-medium">
              PostgreSQL - Express.js - JavaScript
            </p>
            <a
              href="https://coffeenews.onrender.com/api/"
              target="_blank"
              className="block text-1xl text-center mt-16 px-4 py-2 bg-amber-950 text-white rounded-md md:hover:bg-amber-900"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/YoosufAhmad/be-news-project"
              target="_blank"
              className="block text-1xl text-center my-2 px-4 py-2 bg-amber-950 text-white rounded-md md:hover:bg-amber-900"
            >
              Code
            </a>
          </div>
        </div>
      </div>
      
      <div class="max-w-sm sm:max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl xl:max-w-4xl">
        <div class="md:flex relative">
          <div class="md:shrink-0 overflow-hidden">
            <img
              src={projectpic2}
              alt="coffee and newspaper picture by celine ylmz"
              className="object-cover md:max-w-xs hover:scale-110 transition duration-500 cursor-pointer"
            />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-amber-800 font-semibold">
              Full-Stack Project
            </div>
            <a
              href="https://coffeenews.onrender.com/api/"
              target="_blank"
              class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Coffee News (Back-End)
            </a>
            <p class="mt-2 text-slate-700">
              Created following TDD via unit and integration testing.
              Implemented CRUD operations and RESTful API principles. Key
              features include: View all articles or a single article, delete or
              create an article, post comment, and like an article.
            </p>
            <p className="pt-4 text-amber-950 font-medium">
              PostgreSQL - Express.js - JavaScript
            </p>
            <a
              href="https://coffeenews.onrender.com/api/"
              target="_blank"
              className="block text-1xl text-center mt-16 px-4 py-2 bg-amber-950 text-white rounded-md md:hover:bg-amber-900"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/YoosufAhmad/be-news-project"
              target="_blank"
              className="block text-1xl text-center my-2 px-4 py-2 bg-amber-950 text-white rounded-md md:hover:bg-amber-900"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
