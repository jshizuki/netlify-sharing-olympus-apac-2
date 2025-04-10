export default (request) => {
  const blockedIps = Deno.env.get("BLOCKED_IPS")?.split(',') || [];

  // Get the user IP address
  const ipAddress = request.headers.get("x-forwarded-for");

  if (blockedIps.includes(ipAddress)) {
    console.log("Access forbidden - " + ipAddress);
    return new Response(null, { status: 403 });
  }

  console.log("Access granted - " + ipAddress);
};
