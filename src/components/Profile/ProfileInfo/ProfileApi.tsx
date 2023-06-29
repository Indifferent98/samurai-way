import axios from "axios";
import React from "react";
import { Profile } from "../Profile";
import { ProfileApiType, PropsType, SuperPropsType } from "./ProfileContainer";
import { getUserProfileType } from "../../../Redux/profileReducer";

export class ProfileApi extends React.Component<SuperPropsType> {
  componentDidMount(): void {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = "2";
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((res) => {
        this.props.setUserProfile(res.data);
      });
  }

  render() {
    return <Profile profile={this.props.profilePage.profile} />;
  }
}
