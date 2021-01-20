import httpInstance from "../../utils/http";

export function LoginGetToken(data) {
  return httpInstance.post('/app/login', data)
}

export function sendNoteCode(data) {
  return httpInstance.get('/common/sendNoteCode', data)
}
