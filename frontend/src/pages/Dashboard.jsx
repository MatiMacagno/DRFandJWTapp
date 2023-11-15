import * as jwt_decode from 'jwt-decode'

function Dashboard() {

    const token = localStorage.getItem("authTokens")
    

    if (token){
      const decode = jwt_decode.jwtDecode(token)
      var user_id = decode.user_id
      var username = decode.username
      var full_name = decode.full_name
      var image = decode.image
    }

  return (
    <div>
      <p>{user_id}</p>
      <p>{username}</p>
      <p>{full_name}</p>
      <p>{image}</p>
    </div>
  )
}

export default Dashboard

