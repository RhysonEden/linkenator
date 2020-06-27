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

export async function getSearch() {
  try {
    const { data } = await axios.get("/api/links");
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getSomethingElse() {
  try {
    const { data } = await axios.get("/api/tags");
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

export async function updateClicks(id, clicks) {
  try {
    clicks = clicks + 1;
    const { data } = await axios.patch(`/api/links/${id}`, {
      id,
      clicks,
    });
    return data;
  } catch (error) {
    throw error;
  }
}
