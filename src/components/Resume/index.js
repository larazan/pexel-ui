import React from "react";


const Resume = () => {
  return (
    <>
      {/* Page */}
      <div class="mx-auto page max-w-3xl print:max-w-letter md:max-w-letter md:h-letter2 xsm:p-8 sm:p-9 md:pt-16 bg-white">
        {/* Name */}
        <header class="flex items-center ">
          <div
            class="initials-container mr-5 text-base leading-none text-white bg-gray-700 font-medium print:bg-black px-3"
            style={{ paddingBottom: "0.6875rem", paddingTop: "0.6875rem" }}
          >
            <div
              class="initial text-center"
              style={{ paddingBottom: "0.1875rem" }}
            >
              M
            </div>
            <div class="text-center initial">Z</div>
          </div>
          <h1 class="text-2xl font-semibold text-gray-750 pb-px">
            Moch Zamroni
          </h1>
        </header>
        {/* end Name */}
        
      </div>
      {/* end Page */}

      {/* Page */}
      <div class="p-6 mx-auto page max-w-3xl print:max-w-letter md:max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-12 print:bg-white bg-gray-100">
        {/* Column */}
        <div class="md:col-count-2 print:col-count-2 col-gap-md md:h-letter-col-full print:h-letter-col-full col-fill-auto">  
          
          <section class="mt-2 first:mt-0">
            {/* To keep in the same column */}
            <div class="break-inside-avoid">
              <h2 class="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
                ABOUT ME
              </h2>

              <section class="mb-4.5 break-inside-avoid">
                <header>
                  <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                    User Interface Designer
                  </h3>
                  <p class="leading-normal text-md text-gray-650">Since 2010</p>
                </header>
                <p class="mt-2.1 text-md text-gray-700 leading-normal">
                  Minimal and formal résumé website template for print,
                  mo&shy;bile, and desktop. The proportions are the same on the
                  screen and paper. Built with amazing{" "}
                  <a
                    class="hover:bg-gray-150 rounded-lg transition ease-in duration-100"
                    href="https://tailwindcss.com/"
                  >
                    Tailwind CSS&nbsp;°
                  </a>
                  .
                </p>
              </section>
            </div>

            <section class="mb-4.5 break-inside-avoid">
              <header>
                <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                  Front-End Developer
                </h3>
                <p class="leading-normal text-md text-gray-650">Since 2013</p>
              </header>
              <p class="mt-2.1 text-md text-gray-700 leading-normal">
                “docs/index.html” is the main content file. By copying HTML: add
                pages, sec&shy;tions, subsection, and other parts.
              </p>
              <p class="mt-2.1 text-md text-gray-700 leading-normal">
                <span class="font-medium text-gray-600 print:text-black">
                  Important:
                </span>{" "}
                Too much content on one page will break the page in the form of
                additional columns.
              </p>
              <p class="mt-2.1 text-md text-gray-700 leading-normal">
                If you want to change CSS in the classical way, add a class to
                the HTML element and write CSS inside “tailwind.css.”
              </p>
            </section>
          </section>

          <section class="mt-8 first:mt-0">
            {/* To keep in the same column */}
            <div class="break-inside-avoid">
              <h2 class="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
                EXPERIENCE
              </h2>

              <section class="mb-4.5 break-inside-avoid">
                <header>
                  <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                    WebPraktikos Inc.
                  </h3>
                  <p class="leading-normal text-md text-gray-650">
                    Jun 2018 – Present | Web Developer
                  </p>
                </header>
                <p class="mt-2.1 text-md text-gray-700 leading-normal">
                  Built doner pork chop &bull; Served salmon, cream soft cheese,
                  and brisket &bull; Acted 55% pork chop &bull; Filled
                  burgdoggen & frankfurter strip steak with 90% burger patties
                  and broth
                </p>
              </section>
            </div>

            <section class="mb-4.5 break-inside-avoid">
              <header>
                <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                  Mammoth GmbH
                </h3>
                <p class="leading-normal text-md text-gray-650">
                  Feb 2017 – Apr 2018 | Android Developer
                </p>
              </header>
              <ul class="">
                <li class="mt-2.1 text-md text-gray-700 leading-normal">
                  <span class="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                    ›
                  </span>
                  Cooked shrimps for 2 to 3 minutes per side, or until opaque;
                  then, transfered to a serving dish with limon
                </li>
                <li class="mt-2.1 text-md text-gray-700 leading-normal">
                  <span class="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                    ›
                  </span>
                  Roasted a pig, turning frequently, until meat reached 160°F in
                  the thickest part of the shoulder or thigh
                </li>
              </ul>
            </section>

            <section class="mb-4.5 break-inside-avoid">
              <header>
                <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                  Exquisite Systems d.o.o.
                </h3>
                <p class="leading-normal text-md text-gray-650">
                  May 2015 – Dec 2016 | Software QA Specialist
                </p>
              </header>
              <ul class="">
                <li class="mt-2.1 text-md text-gray-700 leading-normal">
                  <span class="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                    ›
                  </span>
                  Made stockfish, which is unsalted fish, usully cod, dried by
                  cold air and wind on wooden racks on the foreshore
                </li>
                <li class="mt-2.1 text-md text-gray-700 leading-normal">
                  <span class="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                    ›
                  </span>
                  Preserved meat without salt by removing fat, cutting it into
                  very thin strips and drying it in the sun or by a fire.
                </li>
                <li class="mt-2.1 text-md text-gray-700 leading-normal">
                  <span class="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                    ›
                  </span>
                  Testend shrimp, crab, lobster, scallops, clams, crawfish
                </li>
              </ul>
            </section>
          </section>

          <section class="mt-8 first:mt-0">
            {/* To keep in the same column */}
            <div class="break-inside-avoid">
              <h2 class="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
                EDUCATION
              </h2>

              <section class="mb-4.5 break-inside-avoid">
                <header>
                  <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                    Graz University of Technology
                  </h3>
                  <p class="leading-normal text-md text-gray-650">
                    2014 – 2015 | Master's Degree in Chemistry
                  </p>
                </header>
                <p class="mt-2.1 text-md text-gray-700 leading-normal">
                  Barbecued shrimp, broiled shrimp, shrimp kabobs
                </p>
              </section>
            </div>

            <section class="mb-4.5 break-inside-avoid">
              <header>
                <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                  Vienna University of Technology
                </h3>
                <p class="leading-normal text-md text-gray-650">
                  2010 – 2013 | Bachelor’s Degree in Biology
                </p>
              </header>
            </section>

            <section class="mb-4.5 break-inside-avoid">
              <header>
                <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                  Vienna University of Technology
                </h3>
                <p class="leading-normal text-md text-gray-650">
                  2010 – 2013| Bachelor’s Degree in Chemistry
                </p>
              </header>
            </section>
          </section>

          

          <section class="mt-8 first:mt-0">
            {/* To keep in the same column */}
            <div class="break-inside-avoid">
              <h2 class="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
                PROJECTS
              </h2>

              <section class="mb-4.5 break-inside-avoid">
                <header>
                  <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                    <a
                      href="https://github.com/WebPraktikos/universal-resume"
                      class="group"
                    >
                      Universal Resume
                      <span class="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">
                        ↗
                      </span>
                    </a>
                  </h3>
                  <p class="leading-normal text-md text-gray-650">
                    Since 2019 | HTML CSS
                  </p>
                </header>
                <p class="mt-2.1 text-md text-gray-700 leading-normal">
                  Good design is as little design as possible. Less, but better
                  — because it concentrates on the essential aspects, and the
                  pro&shy;ducts are not burdened with non-essentials.
                </p>
              </section>
            </div>

            <section class="mb-4.5 break-inside-avoid">
              <header>
                <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                  <a
                    href="https://github.com/WebPraktikos/tailwindcss-rich-docs"
                    class="group"
                  >
                    tailwindcss-rich-docs
                    <span class="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">
                      ↗
                    </span>
                  </a>
                </h3>
                <p class="leading-normal text-md text-gray-650">
                  2017 | JavaScript
                </p>
              </header>
              <p class="mt-2.1 text-md text-gray-700 leading-normal">
                Good design is long-lasting. It avoids being fashionable and
                therefore never appears antiquated.
              </p>
              <p class="mt-2.1 text-md text-gray-700 leading-normal">
                Good design is honest. It does not make a product more
                innovative, powerful or valuable than it really is.
              </p>
            </section>

            <section class="mb-4.5 break-inside-avoid">
              <header>
                <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                  Third One
                </h3>
                <p class="leading-normal text-md text-gray-650">
                  2013 – 2014 | Vue
                </p>
              </header>
              <p class="mt-2.1 text-md text-gray-700 leading-normal">
                Good design is innovative. Technological development is always
                offering new opportunities for innovative design.
              </p>
              <p class="mt-2.1 text-md text-gray-700 leading-normal">
                Good design emphasizes the usefulness of a product whilst
                disregarding anything that could possibly detract from it.
              </p>
            </section>

            <section class="mb-4.5 break-inside-avoid">
              <header>
                <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                  Fantastic Project
                </h3>
                <p class="leading-normal text-md text-gray-650">
                  2012 | JavaScript
                </p>
              </header>
              <p class="mt-2.1 text-md text-gray-700 leading-normal">
                Products fulfilling a purpose are like tools. They are neither
                decorative objects nor works of art. Their design should
                therefore be both neutral and restrained, to leave room for the
                user’s self-expression.
              </p>
            </section>
          </section>

          <section class="mt-8 first:mt-0">
            {/* To keep in the same column */}
            <div class="break-inside-avoid">
              <h2 class="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
                SKILLS
              </h2>

              <section class="mb-4.5 break-inside-avoid">
                <header>
                  <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                    JavaScript
                  </h3>
                  <p class="leading-normal text-md text-gray-650">
                    Middle Level
                  </p>
                </header>
                <p class="mt-2.1 text-md text-gray-700 leading-normal">
                  Good parts: pure function, higher-order functions, factory
                  functions, composition. Bad parts: inheritance, this, new.
                </p>
                <div class="my-3.2 last:pb-1.5">
                  <ul class="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6">
                    <li class="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                      ES6
                    </li>
                    <li class="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                      Vue
                    </li>
                    <li class="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                      Functional Programming
                    </li>
                    <li class="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                      Node
                    </li>
                  </ul>
                </div>
              </section>
            </div>

            <section class="mb-4.5 break-inside-avoid">
              <header>
                <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                  Other
                </h3>
              </header>
              <div class="my-3.2 last:pb-1.5">
                <ul class="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6">
                  <li class="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                    CSS
                  </li>
                  <li class="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                    Rust
                  </li>
                  <li class="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                    Git
                  </li>
                  <li class="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                    Go
                  </li>
                  <li class="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                    Linux Server
                  </li>
                  <li class="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                    UI Design
                  </li>
                  <li class="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                    Photoshop
                  </li>
                  <li class="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                    Illustrator
                  </li>
                  <li class="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                    Figma
                  </li>
                  <li class="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                    Typography
                  </li>
                </ul>
              </div>
            </section>
          </section>

          <section class="mt-8 first:mt-0">
            {/* To keep in the same column */}
            <div class="break-inside-avoid">
              <h2 class="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
                CONTACT
              </h2>

              <section class="mb-4.5 break-inside-avoid">
                <ul class="list-inside pr-7">
                  <li class="mt-1.5 leading-normal text-gray-700 text-md">
                    <a href="//webpraktikos.com" class="group">
                      webpraktikos.com
                      <span class="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">
                        ↗
                      </span>
                    </a>
                  </li>
                  <li class="mt-1.5 leading-normal text-gray-700 text-md">
                    <a href="//twitter.com/webpraktikos" class="group">
                      twitter.com/webpraktikos
                      <span class="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">
                        ↗
                      </span>
                    </a>
                  </li>
                  <li class="mt-1.5 leading-normal text-gray-700 text-md">
                    1020 Wien, Austria
                  </li>
                  <li class="mt-1.5 leading-normal text-gray-700 text-md">
                    hi@webpraktikos.com
                  </li>
                  <li class="mt-1.5 leading-normal text-gray-700 text-md">
                    (+43) 0699 77 33 77 55
                  </li>
                </ul>
              </section>
            </div>
          </section>
        </div>
        {/* end Column */}
      </div>
      {/* end Page */}

      
    </>
  );
};

export default Resume;
