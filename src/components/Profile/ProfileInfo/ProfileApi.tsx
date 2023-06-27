import axios from "axios";
import React from "react";
import { Profile } from "../Profile";
import { ProfileApiType } from "./ProfileContainer";
import { getUserProfileType } from "../../../Redux/profileReducer";

export class ProfileApi extends React.Component<ProfileApiType> {
  componentDidMount(): void {
    axios
      .get(
        // ${this.props.profilePage.profile?.userId}
        `https://social-network.samuraijs.com/api/1.0/profile/${
          this.props.profilePage.profile.userId
            ? this.props.profilePage.profile.userId
            : "2"
        }`
      )
      .then((res) => {
        this.props.setUserProfile(res.data);
      });
  }

  render() {
    return <Profile profile={this.props.profilePage.profile} />;
  }
}
