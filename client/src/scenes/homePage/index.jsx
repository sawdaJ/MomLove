import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import AdvertWidget from "scenes/widgets/AdvertWidget";
import FriendListWidget from "scenes/widgets/FriendListWidget";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display="flex"
        gap="3rem" // Adjust the gap value to increase or decrease the space between columns
        justifyContent="center"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : "100%"}>
          <UserWidget userId={_id} picturePath={picturePath} />
          <Box m="2rem 0" />
          <AdvertWidget />
          <Box m="2rem 0" />
          <FriendListWidget userId={_id} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "68%" : "100%"} // Updated flexBasis value for the posts column
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={picturePath} />
          <Box m="2rem 0" />
          <PostsWidget userId={_id} />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
