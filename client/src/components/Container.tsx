interface PropsContainer {
  children: React.ReactNode;
}

export const Container: React.FC<PropsContainer> = ({ children }) => {
  return (
    <div className="mx-10 my-2">
      {children}
    </div>
  )
}