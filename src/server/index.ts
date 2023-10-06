import { WebContainer } from '@webcontainer/api'
import { files } from './files'

let webcontainerInstance: WebContainer | null = null

async function installDenpendencies() {
  if (!webcontainerInstance) return

  const installProcess = await webcontainerInstance.spawn('npm', ['install'])

  installProcess.output.pipeTo(new WritableStream({
    write(data) {
      console.log(data)
    }
  }))

  const exitCode = await installProcess.exit

  if (exitCode !== 0) {
    throw new Error('Installation failed')
  }
}

async function startDevServer() {
  if (!webcontainerInstance) return

  webcontainerInstance.on('server-ready', (_, url) => {
    console.log(`Server running at ${url}`)
    window.__WEB_CONTAINER_SERVER_STARTED__ = true
  })

  webcontainerInstance.on('error', error => {
    console.log('start server error: ', error)
  })

  webcontainerInstance.spawn('npm', ['run', 'start'])
}

async function boot() {
  webcontainerInstance = await WebContainer.boot()
  window.__WEB_CONTAINER_INSTANCE__ = webcontainerInstance
}

async function mountFiles() {
  if (!webcontainerInstance) return
  await webcontainerInstance.mount(files)
}

export async function bootWebContainer() {
  if (webcontainerInstance) return
  
  window.addEventListener('load', async () => {
    await boot()
    await mountFiles()
    await installDenpendencies()
    startDevServer()
  })
}

bootWebContainer()