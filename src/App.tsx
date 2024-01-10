import { useState } from "react";
import Navbar from "./components/navbar";
import Icon from "./components/svgs/icon";
import IconAngleLeft from "./components/svgs/icon-angle-left";
import IconAngleRight from "./components/svgs/icon-angle-right";
import InconArrow from "./components/svgs/incon-arrow";

function App() {
  const [section, setSection] = useState<number>(1);
  console.log("section: ", section)

  const handleArrowRight = () => {
    setSection((prev) => {
      if (prev === 3) return 1;
      return prev += 1;
    });
  };

  const handleArrowLeft = () => {
    setSection((prev) => {
      if (prev === 1) return 3;
      return prev -= 1;
    });
  };

  return (
    <>
      <Navbar />

      <div
        className="relative overflow-hidden w-full flex"
      >
        <Icon />

        {
          section === 1 ?
            <section
              className={`
                flex flex-col sm:flex-row relative w-full flex-shrink-0 
                translate-x-[var(--translate-value,_0)]
              `}
            >
              <div className="relative sm:w-0 sm:flex-grow">
                <img
                  src="images/desktop-image-hero-1.jpg"
                  alt="A table with a little plan on the top and with a few white chairs around"
                  className="object-cover w-full h-full hidden sm:block"
                />

                <img
                  src="images/mobile-image-hero-1.jpg"
                  alt="A table with a little plan on the top and with a few white chairs around"
                  className="object-cover w-[var(--img-movile-w)] aspect-square block sm:hidden  flex-grow"
                />

                <div className="absolute right-0 bottom-0 sm:bottom-0 sm:left-full flex">
                  <button
                    onClick={handleArrowLeft}
                    className="h-[var(--icon-angle-h)] aspect-square flex items-center justify-center bg-black sm:hover:bg-[var(--clr-darker-gray)] transition-colors"
                  >
                    <IconAngleLeft />
                  </button>
                  <button
                    onClick={handleArrowRight}
                    className="h-[var(--icon-angle-h)] aspect-square flex items-center justify-center bg-black sm:hover:bg-[var(--clr-darker-gray)] transition-colors"
                  >
                    <IconAngleRight />
                  </button>
                </div>
              </div>

              <div className="flex flex-col lg:flex-grow gap-4 p-8 pt-14 sm:p-[5.5rem] sm:max-w-[var(--section-text-w)] lg:w-0 pb-16 sm:pb-32">
                <h2 className="text-[2.5rem] leading-[2.5rem] fw-700">
                  Discover innovative ways to decorate
                </h2>

                <p className="text-[var(--clr-dark-gray)]">
                  We provide unmatched quality, comfort, and style for property
                  owners across the country. Our experts combine form and function
                  in bringing your vision to life. Create a room in your own style
                  with our collection and make your property a reflection of you and
                  what you love.
                </p>

                <a href="">
                  <span className="flex gap-4 items-center tracking-[.5rem] fw-600 sm:hover:text-[var(--clr-dark-gray)] transition-colors">
                    SHOP NOW
                    <InconArrow />
                  </span>
                </a>
              </div>
            </section>
            : section === 2 ?
              <section
                className={`
                flex flex-col sm:flex-row relative w-full flex-shrink-0 
                translate-x-[var(--translate-value,_0)]
              `}
              >
                <div className="relative sm:w-0 sm:flex-grow">
                  <img
                    src="images/desktop-image-hero-2.jpg"
                    alt="A phorograph of a few chairs with different colors"
                    className="object-cover w-full h-full hidden sm:block"
                  />

                  <img
                    src="images/mobile-image-hero-2.jpg"
                    alt="A phorograph of a few chairs with different colors"
                    className="object-cover w-[var(--img-movile-w)] aspect-square block sm:hidden  flex-grow"
                  />

                  <div className="absolute right-0 bottom-0 sm:bottom-0 sm:left-full flex">
                    <button
                      onClick={handleArrowLeft}
                      className="h-[var(--icon-angle-h)] aspect-square flex items-center justify-center bg-black sm:hover:bg-[var(--clr-darker-gray)] transition-colors"
                    >
                      <IconAngleLeft />
                    </button>
                    <button
                      onClick={handleArrowRight}
                      className="h-[var(--icon-angle-h)] aspect-square flex items-center justify-center bg-black sm:hover:bg-[var(--clr-darker-gray)] transition-colors"
                    >
                      <IconAngleRight />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-grow gap-4 p-8 pt-14 sm:p-[5.5rem] sm:max-w-[var(--section-text-w)] lg:w-0 pb-16 sm:pb-32">
                  <h2 className="text-[2.5rem] leading-[2.5rem] fw-700">
                    We are available all across the globe
                  </h2>

                  <p className="text-[var(--clr-dark-gray)]">
                    With stores all over the world, it's easy for you to find
                    furniture for your home or place of business. Locally, we’re in
                    most major cities throughout the country. Find the branch nearest
                    you using our store locator. Any questions? Don't hesitate to
                    contact us today.
                  </p>

                  <a href="">
                    <span className="flex gap-4 items-center tracking-[.5rem] fw-600 sm:hover:text-[var(--clr-dark-gray)] transition-colors">
                      SHOP NOW
                      <InconArrow />
                    </span>
                  </a>
                </div>
              </section>
              : section === 3 ?
                <section
                  className={`
                flex flex-col sm:flex-row relative w-full flex-shrink-0 
                translate-x-[var(--translate-value,_0)]
              `}
                >
                  <div className="relative sm:w-0 sm:flex-grow">
                    <img
                      src="images/desktop-image-hero-3.jpg"
                      alt="A phorograph of a few chairs with different colors"
                      className="object-cover w-full h-full hidden sm:block"
                    />

                    <img
                      src="images/mobile-image-hero-3.jpg"
                      alt="A phorograph of a few chairs with different colors"
                      className="object-cover w-[var(--img-movile-w)] aspect-square block sm:hidden  flex-grow"
                    />

                    <div className="absolute right-0 bottom-0 sm:bottom-0 sm:left-full flex">
                      <button
                        onClick={handleArrowLeft}
                        className="h-[var(--icon-angle-h)] aspect-square flex items-center justify-center bg-black sm:hover:bg-[var(--clr-darker-gray)] transition-colors"
                      >
                        <IconAngleLeft />
                      </button>
                      <button
                        onClick={handleArrowRight}
                        className="h-[var(--icon-angle-h)] aspect-square flex items-center justify-center bg-black sm:hover:bg-[var(--clr-darker-gray)] transition-colors"
                      >
                        <IconAngleRight />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-grow gap-4 p-8 pt-14 sm:p-[5.5rem] sm:max-w-[var(--section-text-w)] lg:w-0 pb-16 sm:pb-32">
                    <h2 className="text-[2.5rem] leading-[2.5rem] fw-700">
                      Manufactured with the best materials
                    </h2>

                    <p className="text-[var(--clr-dark-gray)]">
                      Our modern furniture store provide a high level of quality. Our
                      company has invested in advanced technology to ensure that every
                      product is made as perfect and as consistent as possible. With
                      three decades of experience in this industry, we understand what
                      customers want for their home and office.
                    </p>

                    <a href="">
                      <span className="flex gap-4 items-center tracking-[.5rem] fw-600 sm:hover:text-[var(--clr-dark-gray)] transition-colors">
                        SHOP NOW
                        <InconArrow />
                      </span>
                    </a>
                  </div>
                </section>
                : null
        }
      </div>

      <div className="flex flex-col sm:flex-row">
        <img
          src="images/image-about-dark.jpg"
          alt="A photograph of a room i the dark with a small table with some chairs around and a bed in the background"
          className="w-full sm:w-[calc(var(--section-text-w)-(var(--icon-angle-h)*2))] object-cover min-h-full"
        />

        <div className="flex flex-col flex-grow p-10 gap-4">
          <header>
            <h3 className="fw-700 tracking-[.5rem]">ABOUT OUR FURNITURE</h3>
          </header>

          <p className="text-[var(--clr-dark-gray)]">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>

        <img
          src="images/image-about-light.jpg"
          alt="Photograph of a chair in a studio with bright white background"
          className="w-full sm:w-[calc(var(--section-text-w)-(var(--icon-angle-h)*2))] object-cover min-h-full"
        />
      </div>
    </>
  );
}

export default App;
