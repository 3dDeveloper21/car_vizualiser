import 'regenerator-runtime/runtime'
import { World } from './js/World/World'
import '@/styles/index.scss'

// Create the main function
async function main() {
  // Sizes
  const SIZES = { width: window.innerWidth, height: window.innerHeight }

  // Get a reference to the container element
  const container = document.querySelector('#scene-container')

  // Create a new world
  const world = new World(container, SIZES)

  // complete async tasks
  await world.init()

  // Start the animation loop
  world.start()
}

main().catch((err) => {
  console.log(err)
})
