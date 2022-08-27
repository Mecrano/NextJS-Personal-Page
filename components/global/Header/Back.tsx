import { useRouter } from 'next/router'

const Back = () => {
  const router = useRouter()

  return router.pathname !== '/' ? <div>Back</div> : <div></div>
}

export default Back
