import react from "react";
import { usersPropsType } from "./UsersContainer";
import s from "./Users.module.css";
export const Users: React.FC<usersPropsType> = (props): JSX.Element => {
  debugger;

  const mapUsers = props.usersPage.users.map((t) => {
    const changeFollowStatus = () => {
      props.changeFollowStatus(t.id);
    };
    return (
      <div className={s.user}>
        <div className={s.avatar}>
          <div>
            <img
              className={s.img}
              src="https://static.vecteezy.com/system/resources/previews/013/659/682/non_2x/human-avatar-user-ui-account-square-clip-art-icon-vector.jpg"
              alt="ava"
            />
          </div>
          <div>
            <button
              onClick={changeFollowStatus}
              className={s.follow}
              style={{
                background: t.followStatus
                  ? "rgb(17, 144, 59)"
                  : "rgb(209, 58, 44)",
              }}
            >
              {t.followStatus ? "follow " : "unfollow "}
            </button>
          </div>
        </div>
        <div className={s.board}>
          <div className={s.nameStatus}>
            <div className={s.name}>{t.name}</div>
            <div>{t.status}</div>
          </div>
          <div className={s.address}>
            <div>{t.address.country}</div>
            <div>{t.address.city}</div>
          </div>
        </div>
      </div>
    );
  });

  return <div>{mapUsers} </div>;
};
