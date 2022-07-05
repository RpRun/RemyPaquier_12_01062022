import React from 'react';
import Aside from '../../components/Aside/Aside';
import DashBoard from '../../components/Dashboard/Dashboard';
import useAxios from '../../utils/hooks';

const Profile = () => {
  // USE aXUIOS SI USER ID SINON ERROR
  //use param id (url) id va a use axios
  // const id = useParams()
  // useAxios(id);
  return (
    <>
      <DashBoard />
      <Aside />
    </>
  );
};

export default Profile;
