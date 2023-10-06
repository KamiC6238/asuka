export function assertWebContainerInstanceExist() {
  if (!window.__WEB_CONTAINER_INSTANCE__) {
    throw new Error('WebContainerInstance is not exist.')
  }
}

function assertDevServerStarted() {
  if (!window.__WEB_CONTAINER_SERVER_STARTED__) {
    throw new Error('Web dev server is not started.')
  }
}

export function assert() {
  assertDevServerStarted();
  assertWebContainerInstanceExist()
}
