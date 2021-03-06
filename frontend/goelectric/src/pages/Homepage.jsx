import CarForm from "../components/CarFrom";
import LogoContainer from "../components/LogoContainer";
import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import ResultContainer from "../components/ResultContainer";
import UserServices from "../services/UserServices";
import Address from "../Address";

function Homepage() {
  const [params] = useSearchParams();
  const [carResult, setCarResult] = useState({
    score: null,
    best_cards: [],
  });
  const [userData, setUserData] = useState({
    days: "",
    km: "",
    price: "",
    photovoltaics: "",
    userAddress: new Address("", "", "", ""),
    maxDistance: "",
    body: "",
    brands: [],
    destAddress: [],
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    UserServices.postCarForm(userData, params.has('locs') && params.getAll('locs'))
      .then((res) => res.json())
      .then((res) => setCarResult(res));
    console.log(userData);
  };

  return (
    <div
      style={{
        backgroundImage:
          'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")',
      }}
    >
      <LogoContainer />
      <CarForm
        userData={userData}
        setUserData={setUserData}
        handleSubmit={handleSubmit}
        custom={params.has('locs')}
      />
      {carResult.score && <ResultContainer {...carResult} />}
    </div>
  );
}

export default Homepage;
