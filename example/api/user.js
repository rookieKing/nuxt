import { post } from '@/plugins/fetch'

export function list(page) {
  return post('/user/list', { page });
}
