import { atom } from 'recoil';

export const loginModalOpenState = atom( {
  key: 'loginModalOpenState',
  default: false
})

export const signupModalOpenState = atom( {
  key: 'signupModalOpenState',
  default: false
})
