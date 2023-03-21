import React from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { myPostsData } from "../../../Redux/state";

// import { messageDataArrayType } from "../../Dialogs/Dialogs";

type MyPostsPropsType = {
  myPostsData: myPostsData[];
};

const MyPosts = (props: MyPostsPropsType): JSX.Element => {
  let postsForApplicationPost = props.myPostsData.map((t) => (
    <Post like={t.likesCount} message={t.message} />
  ));
  return (
    <div>
      <div className={s.changePost}>
        My postsss
        <div>
          New Post
          <textarea name="" id=""></textarea>
          <button>Add Post</button>
          <button>Remove</button>
        </div>
      </div>

      {postsForApplicationPost}
      {/* <Post like={myPostsData[0].likesCount} message={myPostsData[0].message} />
      <Post like={myPostsData[1].likesCount} message={myPostsData[1].message} />
      <Post like={myPostsData[2].likesCount} message={myPostsData[2].message} />
      <Post like={myPostsData[3].likesCount} message={myPostsData[3].message} />
      <Post like={myPostsData[4].likesCount} message={myPostsData[4].message} /> */}
    </div>
  );
};
export { MyPosts };
