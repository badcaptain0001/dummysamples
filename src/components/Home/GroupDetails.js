import React from "react";

function GroupDetails() {
  return (
    <section className="flex justify-between items-center px-28 py-28 gap-28">
      <div className="">
        <img src="/images/GroupDetails.svg" alt="" />
      </div>
      <div className="w-2/4">
        <h1 className="text-5xl font-bold font-monts">From few to a fandom</h1>
        <p className="pt-8 font-monts w-3/4 text-lg">
        Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.
        </p>
      </div>
    </section>
  );
}

export default GroupDetails;
