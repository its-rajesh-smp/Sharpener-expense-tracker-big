const API_KEY = "AIzaSyCeTaoHkA248p7qyEgJVzM3D8N1OVaNWTI"
export const AUTH_SIGNUP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`
export const AUTH_SIGNIN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`
export const UPDATE_USER = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`
export const GET_USER = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${API_KEY}`
export const VERIFY_USER = `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${API_KEY}`