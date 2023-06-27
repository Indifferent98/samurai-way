import React from "react";
import s from "./ProfileInfo.module.css";
import { ProfilePropsType } from "../Profile";

export const ProfileInfo = (props: ProfilePropsType): JSX.Element => {
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

          <div className={s.profileInfoItem}>
            facebook:
            <span> {props.profile.contacts.facebook}</span>
          </div>
          <div className={s.profileInfoItem}>
            github:
            <span> {props.profile.contacts.github}</span>
          </div>
          <div className={s.profileInfoItem}>
            instagram:
            <span> {props.profile.contacts.instagram}</span>
          </div>
          <div className={s.profileInfoItem}>
            mainLink:
            <span> {props.profile.contacts.mainLink}</span>
          </div>
          <div className={s.profileInfoItem}>
            twitter:
            <span> {props.profile.contacts.twitter}</span>
          </div>
          <div className={s.profileInfoItem}>
            vk: <span> {props.profile.contacts.vk}</span>
          </div>
          <div className={s.profileInfoItem}>
            website:
            <span>{props.profile.contacts.website}</span>
          </div>
          <div className={s.profileInfoItem}>
            <span> youtube:{props.profile.contacts.youtube}</span>
          </div>
        </div>
      </div>
    </>
  );
};
