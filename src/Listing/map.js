import React from "react";

function MAP() {
  const address = "Mason Street, Manchester, Greater Manchester, M4";
  const search = `https://maps.google.com/maps?q=${address}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          title={address}
          src={search}
          width="100%"
          height="500"
          id="gmap_canvas"
          style={{ cursor: 'pointer' }} // Add this style to change the pointer style
        />
      </div>
    </div>
  );
}

export default MAP;
