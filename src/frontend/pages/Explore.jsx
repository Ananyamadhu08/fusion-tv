import React from "react";
import { FilterVideosDropdown, VideoDisplayCard } from "../components";
import { useFilters } from "../context/providers";

const ExplorePage = () => {
  const { filteredVideos } = useFilters();

  return (
    <div className="explorePage__container">
      <div className="mt-10 ml-7 flex justify-start">
        <FilterVideosDropdown />
      </div>

      <div className="videoCard__container grid p-7 mt-6">
        {filteredVideos &&
          filteredVideos.map((video) => (
            <VideoDisplayCard video={video} key={video._id} />
          ))}
      </div>

      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
    </div>
  );
};

export default ExplorePage;
