import { FC } from 'react'
import * as Icons from '@heroicons/react/solid'

const Icon: FC<{ icon: string }> = props => {
  const { ...icons } = Icons
  // @ts-ignore
  // Heroicons does not support dynamic imports, placeholder fix
  const DynamicIcon: JSX.Element = icons[props.icon]

  return (
    <>
      {/* @ts-ignore */}
      <DynamicIcon
        className="mr-2 md:(w-14 h-14) w-10 h-10"
        aria-hidden="true"
      />
    </>
  )
}

export default Icon
