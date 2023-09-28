import React from "react";

const UserContext = React.createContext("Brillio");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
