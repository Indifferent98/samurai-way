import axios from "axios";
import React from "react";
import { Profile } from "../Profile";
import { ProfileApiType } from "./ProfileContainer";
import { getUserProfileType } from "../../../Redux/profileReducer";

export class ProfileApi extends React.Component<ProfileApiType> {
  componentDidMount(): void {
    let userId: string | null | number | undefined =
      this.props.profilePage.profile?.userId;
    if (userId === null || userId === undefined) {
      userId = "12313";
    }
    axios
      .get(
        // ${this.props.profilePage.profile?.userId}
        `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
      )
      .then((res) => {
        this.props.setUserProfile(res.data);
      });
  }

  render() {
    return <Profile profile={this.props.profilePage.profile} />;
  }
}
