import React from "react";

const ContactSection = () => {
  return (
    <section className="min-h-screen bg-amber-800 ">
      <div className="mx-4 md:mx-8 lg:mx-10 lg:p-8 p-4 flex gap-4 ">
        <div className="flex-1 border">
          <form action="">
            <div className="flex flex-col gap-4  p-4">
              <h2 className="text-center text-3xl py-4 text-white">
                Send us a message
              </h2>
              <div className=" flex gap-4">
                <div className="flex-1">
                  <input
                    className="w-full rounded px-6 py-1"
                    type="text"
                    placeholder="Enter first Name"
                  />
                </div>
                <div className="flex-1">
                  <input
                    className="w-full rounded px-6 py-1"
                    type="text"
                    placeholder="Enter last Name"
                  />
                </div>
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full px-6 py-1 rounded"
                />
              </div>
              <div>
                <textarea className="w-full h-40 rounded" placeholder="Message"></textarea>
              </div>
            </div>
          </form>
        </div>
        <div className="flex-1 border">right</div>
      </div>
    </section>
  );
};

export default ContactSection;
