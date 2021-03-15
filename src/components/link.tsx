import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby'

type LinkProps = Omit<GatsbyLinkProps<Record<string, unknown>>, 'ref'>

function Link({ to, children, ...other }: LinkProps) {
  // Internal link will start with exactly one slash, anything else is external.
  const isInternal = /^\/(?!\/)/.test(to)

  // Gatsby link for internal links
  if (isInternal) {
    return (
      <GatsbyLink to={to} {...other}>
        {children}
      </GatsbyLink>
    )
  }

  // <a> for other links
  return (
    <a href={to} {...other}>
      {children}
    </a>
  )
}

export default Link
