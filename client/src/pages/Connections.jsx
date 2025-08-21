import React from "react";
import {
  Users,
  UserPlus,
  UserCheck,
  UserRoundPen,
  MessageSquare,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  dummyConnectionsData as connections,
  dummyFollowersData as followers,
  dummyFollowingData as following,
  dummyPendingConnectionsData as pendingConnections,
  dummyUserData,
} from "../assets/assets";

const Connections = () => {
  const navigate = useNavigate();

  const dataArray = [
    { label: "Followers", value: followers, icon: Users },
    { label: "Following", value: following, icon: Users },
    { label: "Pending", value: pendingConnections, icon: Users },
    { label: "Connections", value: connections, icon: Users },
  ];

  return <div>Connections</div>;
};

export default Connections;
