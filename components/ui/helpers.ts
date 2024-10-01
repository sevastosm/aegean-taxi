export const activatePickUp = () => {
  document.getElementById("locationInputs").classList.add("hidden");
  document.getElementById("locationInputs").classList.remove("flex");
  document.getElementById("pinAddressWrapper").classList.add("flex");
  document.getElementById("pinAddressWrapper").classList.remove("hidden");
};

export const resetPickUp = () => {
  document.getElementById("locationInputs").classList.add("flex");
  document.getElementById("locationInputs").classList.remove("hidden");
  document.getElementById("pinAddressWrapper").classList.remove("flex");
  document.getElementById("pinAddressWrapper").classList.add("hidden");
};
