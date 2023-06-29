import axios from "axios";
import React from "react";
import { Profile } from "../Profile";
import { ProfileApiType, PropsType, SuperPropsType } from "./ProfileContainer";
import { getUserProfileType } from "../../../Redux/profileReducer";

export class ProfileApi extends React.Component<SuperPropsType> {
  componentDidMount(): void {
    debugger;
    let userId: string | null | number | undefined =
      this.props.profilePage.profile?.userId;
    if (userId === null || userId === undefined) {
      userId = "12313";
    }
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId}`
      )
      .then((res) => {
        this.props.setUserProfile(res.data);
      });
  }

  render() {
    return <Profile profile={this.props.profilePage.profile} />;
  }
}
