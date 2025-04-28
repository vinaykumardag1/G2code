import Link from "next/link";
import React from "react";

const Breadcrumb = ({
  subpageName,
  pageName,
  description,
  img,
  color,
}: {
  subpageName: string;
  pageName: string;
  description?: string;
  img?: string;
  color?: string;
}) => {
  return (
    <>
      <section
        className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]"
        style={{
          backgroundImage: img ? `url(${img})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div className="mb-8 md:mb-0 lg:mb-12">
                <div className={`breadcrumb-container ${color || ''}`}>
                <h1 className={`mb-5 text-4xl font-bold pb-5 px-5 ${color ? color : 'text-white'} sm:text-4xl whitespace-nowrap`}>
                    {pageName.toUpperCase()}
                  </h1>
                  <ul className="flex items-center px-5">
                    <li className="flex items-center">
                      <Link
                        href="/"
                        className={`pr-1 text-base font-medium ${color ? color : 'text-white'} hover:text-LightBlue`}
                      >
                        {subpageName.toUpperCase()}
                      </Link>
                      <span className="mr-3 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-body-color"></span>
                    </li>
                    <li className={`text-base font-medium ${color ? color : 'text-white'}`}>
                      {pageName.toUpperCase()}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="w-full px-4 md:w-4/12 lg:w-5/12">
              <div className="text-end">

              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
