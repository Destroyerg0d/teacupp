// /src/app/api/chats/route.js

export async function GET(request) {
  // Simulating a response with chat data
  const chatData = [
    { name: 'Shreyansh Singh', lastMessage: 'Photo', time: 'Friday' },
    { name: 'Ecom US + Indian Group', lastMessage: 'First $500 baby in clothing niche', time: '9/16/2024' },
    { name: 'RAGHUMA HOSTELS', lastMessage: 'Ready stock', time: '1:01 PM' },
    { name: 'Client Reporting', lastMessage: 'Tracking ids #gmc', time: '12:57 PM' },
    { name: 'Kushal Kumar AMITY', lastMessage: 'too aa jana fir', time: '11:49 AM' },
    // Add more chats here...
  ];

  return new Response(JSON.stringify(chatData), { status: 200 });
}
