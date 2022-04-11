import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((json) => setServices(json));
  }, []);

  return [services, setServices];
};

export default useServices;
