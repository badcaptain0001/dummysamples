import React from "react";

function VoiceHome() {

  



  return (
    <section className="flex px-28 justify-center items-center py-28 bg-stone-200">
      <div className="font-monts w-2/4">
        <h1 className="text-5xl font-bold">Where hanging out is easy</h1>
        <p className="w-3/4 mt-10 text-lg">
          Grab a seat in a voice channel when you’re free. Friends in your
          server can see you’re around and instantly pop in to talk without
          having to call.
        </p>
      </div>
      <div>
        <img src="/images/voiceImage.svg" alt="" />
      </div>
    </section>
  );
}

export default VoiceHome;
