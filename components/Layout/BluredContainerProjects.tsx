import s from './Layout.module.sass'

type Props = {
  children: React.ReactNode
}

const BluredContainerProjects = ({ children } : Props) => {
  return (
      <div className={s.bluredContainerProjects}>{children}</div>
  )
}

export default BluredContainerProjects