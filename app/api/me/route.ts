export function GET() {
  // Fetch data from source
  // ...
  const data = {
    name: "John Doe",
    email: "john.doe@example.com",
  };

  return Response.json(data);
}

export async function POST(request: Request) {
  const payload = request.json();

  // Validate payload (e.g. using zod)
  // ...

  // Update user using validated payload
  // ...

  return Response.json({
    status: "ok",
  });
}
