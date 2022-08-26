import s from './Layout.module.sass'

type Props = {
  children: React.ReactNode
}

const BluredContainer = ({ children } : Props) => {
  return (
      <div className={s.bluredContainer}>{children}</div>
  )
}

export default BluredContainer