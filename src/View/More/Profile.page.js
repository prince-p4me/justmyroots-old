import React from "react";
import { Container, Content, List } from "native-base";
import { ActivityIndicator, View } from "react-native";
import LabelValueItem from "../Components/LabelValueItem";
import moment from "moment";
import TextButton from "../Components/TextButton";

const Profile = ({ profile, editProfile }) => {
  return (
    <Container>
      <Content padder>
        {profile ? (
          <View>
            <List>
              <LabelValueItem label="Mobile" value={profile.mobile} />
              <LabelValueItem label="First Name" value={profile.firstName} />
              <LabelValueItem label="Last Name" value={profile.lastName} />
              <LabelValueItem label="Email" value={profile.email} />
              <LabelValueItem
                label="Date of Birth"
                value={moment(profile.dob).format("DD/MM/YYYY")}
              />

              <LabelValueItem
                label="Anniversary"
                value={moment(profile.anniversary).format("DD/MM/YYYY")}
              />
            </List>
            <TextButton title="Edit Profile" onPress={editProfile} />
          </View>
        ) : (
          <ActivityIndicator />
        )}
      </Content>
    </Container>
  );
};

export default Profile;
