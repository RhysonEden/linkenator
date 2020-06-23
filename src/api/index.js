import axios from "axios";

export async function getSomething() {
  try {
    const { data } = await axios.get("/api/links");
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createStuff(url, date, comment, tags) {
  try {
    const { data } = await axios.post("/api/links", {
      url,
      date,
      comment,
      tags,
    });
    return data;
  } catch (error) {
    throw error;
  }
}
