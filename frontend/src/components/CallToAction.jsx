import React from "react";

const CallToAction = () => {
  return (
    <div className="sell-section text-center py-12 bg-gradient-to-r from-orange-100 to-orange-200 rounded-lg shadow-lg">
      <h2 className="section-title text-3xl font-bold text-gray-800 mb-6">
        C'est le moment de vendre
      </h2>
      <button className="btn bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition shadow-md">
        Déposer une annonce
      </button>
    </div>
  );
};

export default CallToAction;
