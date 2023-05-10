import react from "react";
import { usersPropsType } from "./UsersContainer";
import s from "./Users.module.css";
import axios from "axios";

const Users: React.FC<usersPropsType> = (props): JSX.Element => {
  // if (props.usersPage.users.length === 0) {
  const defaultPhotoUrl =
    "https://static.vecteezy.com/system/resources/previews/013/659/682/non_2x/human-avatar-user-ui-account-square-clip-art-icon-vector.jpg";

  const getUsers = () => {
    if (
      props.usersPage.users.length === 0 ||
      props.usersPage.users.length === 3
    )
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          props.setUsers(response.data.items);
        });
  };

  const mapUsers = props.usersPage.users.map((t) => {
    const changeFollowStatus = () => {
      props.changeFollowStatus(t.id);
    };
    return (
      <div key={t.id} className={s.user}>
        <div className={s.avatar}>
          <div>
            <img
              className={s.img}
              src={t.photos.small ? t.photos.small : defaultPhotoUrl}
              alt="here must be avatar"
            />
          </div>
          <div>
            <button
              onClick={changeFollowStatus}
              className={s.follow}
              style={{
                background: t.followed
                  ? "rgb(17, 144, 59)"
                  : "rgb(117, 108, 108)",
              }}
            >
              {t.followed ? "Follow " : "Unfollow "}
            </button>
          </div>
        </div>
        <div className={s.board}>
          <div className={s.nameStatus}>
            <div className={s.name}>
              {t.name}
              {/* {t.secondName[0] + "."} */}
            </div>
            <div>{t.status}</div>
          </div>
          <div className={s.address}>
            <div>{"t.address.country"}</div>
            <div>{"t.address.city"}</div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <button onClick={getUsers}>Get users</button>
      {mapUsers}
    </div>
  );
};
