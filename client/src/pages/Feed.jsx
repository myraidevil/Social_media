import React, { use, useEffect } from "react";
import { dummyPostsData } from "../assets/assets";
import Loading from "../components/Loading";
import StoriesBar from "../components/StoriesBar";

const Feed = () => {
  const [feeds, setfeeds] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const fetchFeeds = async () => {
    setfeeds(dummyPostsData);
    setLoading(false);
  };

  useEffect(() => {
    fetchFeeds();
  }, []);

  return !loading ? (
    <div className="h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 flex  justify-center xl: gap-8">
      {/* stories and posts list */}
      <div>
        <StoriesBar />
        <div>List of Post </div>
      </div>
      {/* right sidebar */}
      <div>
        <div>
          <h1>Sponsered</h1>
        </div>
        <h1>recent messages</h1>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Feed;
