import { Route, Routes, Navigate } from 'react-router-dom';
import Profile from './views/Profile/Profile';
import Error from './views/Error/Error';
import Home from './views/Home/Home';
import { pathByUser, userId } from './cfg';

const Router = () => {
  // console.log('path', pathByUser);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path={pathByUser} element={<Profile />} /> */}
      {/* <Route path={`/user/${userId}`} element={<Profile />} /> */}
      <Route path="/user/:userId/profile" element={<Profile />} />
      {/* <Route path="*" element={<Navigate replace to="/error-page" />} /> */}
      <Route path="/error-page" element={<Error />} />
    </Routes>
  );
};

export default Router;

// / paths to implement later, elements not created yet

/* <Route path="/user/:id/accueil" element={<Accueil />} />
<Route path="/user/:id/profile" element={<Profile />} />
<Route path="/user/:id/settings" element={<Settings />} />
<Route path="/user/:id/community" element={<Community />} /> */

// / paths for dev usage
// <Route path="/user/:id" />
// <Route path="/user/:id/activity" />
// <Route path="/user/:id/average-sessions" />
// <Route path="/user/:id/today-score" />
// <Route path="/user/:id/activity-kind" />
// <Route path="/user/:id/key-data" />
