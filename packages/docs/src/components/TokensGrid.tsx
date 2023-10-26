import '../styles/tokens-grid.css'

interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean;
}

export function TokensGrid({ tokens, hasRemValue = false }: TokensGridProps) {
  return (

    <table className="tokens-grid">
      <thead>
        <tr>Name</tr>
        <tr>Valor</tr>
        {hasRemValue && <th>Pixels</th>}

      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              {hasRemValue && (
                <th>{Number(value.replace('rem', '')) * 16}px</th>
              )}

            </tr>
          )
        })}
      </tbody>
    </table>
  )
}