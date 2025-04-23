import React from "react";

const CallToAction = () => {
  return (
    <div className="sell-section text-center py-12 bg-orange-100">
      <h2 className="section-title text-3xl font-bold text-secondary mb-4">
        C'est le moment de vendre
      </h2>
      <button className="btn bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition">
        Déposer une annonce
      </button>
    </div>
  );
};

export default CallToAction;
