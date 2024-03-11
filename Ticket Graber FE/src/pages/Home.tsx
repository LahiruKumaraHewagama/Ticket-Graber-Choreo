import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ErrorPage from "./ClientIDMissingError";
import SmoothScroll from "smooth-scroll";
import authConfig from "../config.json";
import { useAuthContext } from "@asgardeo/auth-react";
import { Navigation } from "../components/navigation";
import { Header } from "../components/header";
import { JsonData } from "../data/Data";
import axios from 'axios';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
interface DataJsonType {
  Header: any;
  About: any;
}

const Home = () => {
  const [configurationData, setConfigurationData] = useState<any>(authConfig);
  const [landingPageData, setLandingPageData] = useState<DataJsonType>(JsonData);

  
  const [authenticateState, setAuthenticateState] = useState<any>(null);
  const { state, signOut, getBasicUserInfo, getIDToken, getDecodedIDToken } = useAuthContext();

  const history = useHistory();

  useEffect(() => {

    if (state?.isAuthenticated) {

      history.push("/home");

      const getData = async () => {
        const basicUserInfo = await getBasicUserInfo();
        const idToken = await getIDToken();
        const decodedIDToken = await getDecodedIDToken();

        const authState: any = {
          authenticateResponse: basicUserInfo,
          idToken: idToken.split("."),
          decodedIdTokenHeader: JSON.parse(atob(idToken.split(".")[0])),
          decodedIDTokenPayload: decodedIDToken
        };

        setAuthenticateState(authState);


      // Make an API request to the backend with user auth details
      await axios.post(`${process.env.REACT_APP_BASE_URL}/user/sync_user`, authState, {
        headers: {
          Authorization: `Bearer ${authState?.idToken[0]}` // Assuming you have a token for authentication
        }
      })
      .then(response => {
        // Handle successful response from the backend
        console.log('User details:', response.data);
      })
      .catch(error => {
        // Handle errors from the backend
        console.error('Error fetching user details:', error);
      });
      }  

      getData();}

  }, []);

  return (
    <div>
      { configurationData.clientID === "" ?
      
          <ErrorPage />
          :
          <div>
            <Navigation data={"True"}/>
            <Header data={landingPageData.Header} />
          
          </div>
      }
    </div>
  );
};

export default Home;