import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

async function loadBirds() {
  const loader = new GLTFLoader()

  const parrotData = await loader.loadAsync('./models/Parrot.glb')

  console.log('Squaaawk!', parrotData)

  //   const loadedData = await loader.loadAsync('../../../Assets/models/Parrot.glb')
}

export { loadBirds }
