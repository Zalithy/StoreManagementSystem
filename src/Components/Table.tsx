interface Props {
  children: any;
  headers: string[]
}

export const Table = ({children, headers}: Props) => {
  return (
    <table>
      <thead>
        {
          headers.map((header) => (
            <th key={header}>{header}</th>
          ))
        }
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  )
}