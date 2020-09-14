import React from "react";

const PlantUpdatingContext = React.createContext();

export const PlantUpdatingContextProvider = PlantUpdatingContext.Provider;
export const PlantUpdatingContextConsumer = PlantUpdatingContext.Consumer;

export default PlantUpdatingContext;