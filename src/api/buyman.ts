import axios from "axios";

// sleeps the application for the milliseconds that are passed by argument
export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// obtains the name through the identity document
export const getNameByDNI = async (dni: number | string) => {
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im9saXZlcmRnMkBob3RtYWlsLmNvbSJ9.pnGANDWZM-k_JFQGPowjSinW949B3bfeqN-DIp9Fe_o";
  try {
    let response = await axios.get(
      `https://dniruc.apisperu.com/api/v1/dni/${dni}?token=${token}`
    );
    return `${response.data.nombres} ${response.data.apellidoPaterno} ${response.data.apellidoMaterno}`;
  } catch (error) {
    return "";
  }
};
