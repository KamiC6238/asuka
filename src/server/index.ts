import { WebContainer } from '@webcontainer/api'
import { files } from './files'

let webContainerInstance: WebContainer | null = null

async function installDenpendencies() {
  if (!webContainerInstance) return

  const installProcess = await webContainerInstance.spawn('npm', ['install'])

  installProcess.output.pipeTo(new WritableStream({
    write(data) {
      console.log(data)
    }
  }))

  return installProcess.exit
}

async function startDevServer() {
  if (!webContainerInstance) return

  webContainerInstance.spawn('npm', ['run', 'start'])

  webContainerInstance.on('server-ready', (port, url) => {
    console.log(`Server running at ${url}:${port}`)
  })
}

export function getWebContainerInstance() {
  return webContainerInstance
}

export async function bootWebContainer() {
  if (webContainerInstance) return
  
  window.addEventListener('load', async () => {
    webContainerInstance = await WebContainer.boot()

    await webContainerInstance.mount(files)

    const exitCode = await installDenpendencies()

    if (exitCode !== 0) {
      throw new Error('Installation failed')
    }

    startDevServer()
  })
}

bootWebContainer()