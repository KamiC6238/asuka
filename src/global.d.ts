import { WebContainer } from '@webcontainer/api'

declare global {
  interface Window {
    __WEB_CONTAINER_SERVER_STARTED__?: boolean
    __WEB_CONTAINER_INSTANCE__?: WebContainer
  }
}