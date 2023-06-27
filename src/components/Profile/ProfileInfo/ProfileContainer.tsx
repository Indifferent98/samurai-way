import axios from "axios";
import React from "react";
import { Profile } from "../Profile";

import {
  getUserProfileType,
  initialStateProfileType,
  setUserProfileAC,
} from "../../../Redux/profileReducer";
import { Dispatch } from "redux";

type ProfileContainerPropsType = {
  id: number;
};

export class ProfileContainer extends React.Component<ProfileContainerPropsType> {
  componentDidMount(): void {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/${this.props.id}`
      )
      .then((res) => {});
  }

  render() {
    return <Profile />;
  }
}

type mapDispatchToPropsType = {
  setUserProfile: (profile: getUserProfileType) => void;
};

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    setUserProfile(profile: getUserProfileType) {
      setUserProfileAC(profile);
    },
  };
};

type mapStateToPropsType = {
  profilePage: initialStateProfileType;
};

const mapStateToProps = (
  state: initialStateProfileType
): mapStateToPropsType => {
  return { profilePage: state };
};
