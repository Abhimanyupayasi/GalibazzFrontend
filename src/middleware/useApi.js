
  const handleVerifyToken = async (token) => {
    try {
      
      const severURL = import.meta.env.VITE_API_URL;
      const response = await fetch(`${severURL}/verify-token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
           'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ token: token })
      });

      const data = await response.json();
      if(data.message === 'Token is valid'){
        return true;
        }
        else{
            return false;
        }
      console.log(data);
    } catch (error) {
      console.error('Error verifying token:', error);
    }
  };
export default handleVerifyToken;