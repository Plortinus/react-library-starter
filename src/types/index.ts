export type AppProps = {
  text?: string
  description?: string
}

export type ButtonProps = {
  text?: string
  type: 'text' | 'link' | 'ghost' | 'default' | 'primary' | 'dashed'
}
