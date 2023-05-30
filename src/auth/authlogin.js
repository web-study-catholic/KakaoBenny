const REST_API_KEY = "4aac49f0e11fe50a1a2601f9d823befb"
const REDIRECT_URI = "http://localhost:3000"

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`