async function retrieve() {
  const { NEXT_PUBLIC_API_URL } = process.env;

  const response = await fetch(NEXT_PUBLIC_API_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return data;
}

const questionsService = { retrieve };
export default questionsService;
