import { renderSSRHead } from '@unhead/ssr'
import { createHead } from 'unhead'

interface ApplicationConfig {
  routes: string[]
}

export async function renderSSRApplication(_config?: ApplicationConfig) {
  const definition = await Bun.file('../../assets/my-app-definition.json').json()
  console.log(definition)

  const serverHead = createHead()
  serverHead.push({ title: 'hello world 123'})

  const { htmlAttrs, headTags, bodyAttrs, bodyTagsOpen, bodyTags } = await renderSSRHead(serverHead)

  return `
<!DOCTYPE html>
<html ${htmlAttrs}>
  <head>
    ${headTags}
  </head>
  <body ${bodyAttrs}>
    ${bodyTagsOpen}
    <div id="app"></div>
    ${bodyTags}
  </body>
</html>
`
}
