import React from "react";
import s from "./ProfileInfo.module.css";
export const ProfileInfo = (): JSX.Element => {
  return (
    <>
      <img
        className={s.contentImg}
        src="https://icocnews.ru/wp-content/uploads/2015/09/priroda.jpg"
        alt=""
      />
      <div className={s.profileHeadder}>
        <img
          className={s.contentAvatar}
          src="https://i.pinimg.com/originals/fb/d4/85/fbd485151b22d7ccfb912435ac65315a.jpg"
          alt=""
        />
        <div className={s.profileInfo}>
          <div className={s.profileInfoItem}>Evgeny:</div>
          <div className={s.profileInfoItem}>Age:</div>
          <div className={s.profileInfoItem}>Grade:</div>
          <div className={s.profileInfoItem}>About me:</div>
        </div>
      </div>
    </>
  );
};
