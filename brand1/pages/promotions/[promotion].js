import { useRouter } from 'next/router'

export default function Promotions() {

  const router = useRouter();
  const { promotion } = router.query;


  return (
    <div>
      Promotion: {promotion}
    </div>
  )

}
