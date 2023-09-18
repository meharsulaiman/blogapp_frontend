export const checkLogin = async(address:any) => {
  const response = await fetch('http://localhost:8000/auth/checklogin', {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (response.ok) {
    window.location.href = address || '/'
  }
}