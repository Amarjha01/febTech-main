import React from "react";

const Connect = () => {
  const connectData = [
    {
      title: "Need Any Consultations",
      info: "+918868864441",
      desc: "phone",
    },
    {
      title: "Email Address",
      info: "support@febtech.in",
      desc: "mail",
    },
    {
      title: "Office Locations",
      info: "Roorkee, Uttarakhand",
      desc: "location",
    },
  ];

  return (
    <div className="w-[100%] hconnect flex flex-col lg:flex-row  justify-between gap-2 my-1 xl:my-8 lg:py-5 box-border border-b border-gray-700">
      {connectData.map((item, index) => {
        return (
          <div key={index} className="w-[100%] lg:w-1/3 hspinner flex justify-center py-5 gap-3 border-r border-gray-700">
            <div className="hspinImage">
              <svg
                width="49"
                height="51"
                viewBox="0 0 49 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.0526 2.58333C17.0526 1.6341 17.8221 0.864578 18.7714 0.864578H30.2296C31.1789 0.864578 31.9484 1.6341 31.9484 2.58333V12.5998L40.623 7.59151C41.0177 7.36358 41.487 7.30182 41.9272 7.41982C42.3675 7.5378 42.7428 7.82586 42.9709 8.22062L48.7 18.1439C49.1746 18.9659 48.893 20.0171 48.071 20.4917L39.3963 25.5L48.071 30.5082C48.4656 30.736 48.7536 31.1114 48.8717 31.5518C48.9897 31.9921 48.928 32.4612 48.7 32.856L42.9709 42.7792C42.7428 43.174 42.3675 43.4621 41.9272 43.5801C41.487 43.6981 41.0177 43.6362 40.623 43.4085L31.9484 38.4V48.4167C31.9484 49.3659 31.1789 50.1354 30.2296 50.1354H18.7714C17.8221 50.1354 17.0526 49.3659 17.0526 48.4167V38.4L8.37808 43.4085C7.98332 43.6362 7.51417 43.6981 7.07385 43.5801C6.63355 43.4621 6.25815 43.174 6.03022 42.7792L0.301054 32.856C0.0731252 32.4612 0.011365 31.9921 0.129363 31.5518C0.247338 31.1114 0.5354 30.736 0.930163 30.5082L9.60469 25.5L0.930163 20.4917C0.108096 20.0171 -0.173573 18.9659 0.301054 18.1439L6.03022 8.22062C6.25815 7.82586 6.63355 7.5378 7.07385 7.41982C7.51417 7.30182 7.98332 7.36358 8.37808 7.59151L17.0526 12.5998V2.58333ZM20.4901 4.30208V15.5767C20.4901 16.1908 20.1626 16.7582 19.6307 17.0652C19.099 17.3722 18.4438 17.3722 17.912 17.0652L8.14781 11.4279L4.1374 18.3741L13.9016 24.0116C14.4334 24.3186 14.761 24.8861 14.7609 25.5C14.7609 26.1142 14.4334 26.6813 13.9016 26.9884L4.1374 32.6257L8.14781 39.572L17.912 33.9347C18.4438 33.6276 19.099 33.6276 19.6307 33.9347C20.1626 34.2418 20.4901 34.8092 20.4901 35.4231V46.6979H28.5109V35.4231C28.5109 34.8092 28.8386 34.2418 29.3703 33.9347C29.9022 33.6276 30.5574 33.6276 31.089 33.9347L40.8534 39.572L44.8638 32.6257L35.0994 26.9884C34.5678 26.6813 34.2401 26.1142 34.2401 25.5C34.2401 24.8861 34.5678 24.3186 35.0994 24.0116L44.8638 18.3741L40.8534 11.4279L31.089 17.0652C30.5574 17.3722 29.9022 17.3722 29.3703 17.0652C28.8386 16.7582 28.5109 16.1908 28.5109 15.5767V4.30208H20.4901Z"
                  fill="#1136FF"
                ></path>
              </svg>
            </div>
            <div className="content max-sm:w-[55%]">
              <p className="text-lg text-gray-700">{item.title}</p>
              {item.desc === "phone" ? (
                <a
                  href={`tel:${item.info}`}
                  className="text-2xl medium text-gray-900"
                >
                  {item.info}
                </a>
              ) : item.desc === "mail" ? (
                <a
                  href={`mailto:rajat@febtech.in`}
                  className="text-2xl medium text-gray-900"
                >
                  {item.info}
                </a>
              ) : (
                <a href="https://www.google.com/maps/place/FEBTECH+IT+SOLUTIONS+Pvt.+Ltd/@29.8845467,77.8633216,15z/data=!4m6!3m5!1s0x390eb51d58bca643:0x35e3e1db1d8a7707!8m2!3d29.8917664!4d77.8681671!16s%2Fg%2F11ppzl_txm?entry=ttu" 
                target="_blank"
                className="text-xl 2xl:text-2xl medium text-gray-900">{item.info}</a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connect;
