export async function POST(request) {
    const { email, password } = await request.json(); // Parse the incoming request body
  
    // Here, you can add actual authentication logic (e.g., check against a database)
    if (email === 'test@example.com' && password === 'password123') {
      // Successful login (you can return a token or session data here)
      return new Response(JSON.stringify({ message: 'Login successful' }), {
        status: 200,
      });
    } else {
      // Failed login
      return new Response(JSON.stringify({ message: 'Invalid credentials' }), {
        status: 401,
      });
    }
  }
  