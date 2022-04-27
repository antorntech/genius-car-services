import React from "react";
import { useParams } from "react-router-dom";
import useServiceDetail from "../useServiceDetail/useServiceDetail";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";
import toastr from "toastr";

const CheckOut = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    );
  }

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const order = {
      email: user.email,
      service: service.name,
      serviceId: serviceId,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
    axios.post("http://localhost:5000/order", order).then((response) => {
      const { data } = response;
      if (data.insertedId) {
        toastr.success("Your order is booked", { timeOut: 5000 });
        event.target.reset();
      }
    });
  };

  return (
    <div className="w-50 mx-auto">
      <h3>Please Order: {service.name}</h3>
      <form onSubmit={handlePlaceOrder}>
        <input
          className="w-100 mb-2"
          type="text"
          value={user?.displayName}
          name="name"
          placeholder="name"
          required
          readOnly
        />
        <br />
        <input
          className="w-100 mb-2"
          type="email"
          value={user?.email}
          name="email"
          placeholder="email"
          required
          readOnly
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          value={service.name}
          name="service"
          placeholder="service"
          required
          readOnly
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="address"
          placeholder="address"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="phone"
          placeholder="phone"
          required
        />
        <br />
        <input className="btn btn-primary" type="submit" value="Place Order" />
      </form>
    </div>
  );
};

export default CheckOut;
