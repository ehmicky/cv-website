import type { OnPreBuild } from '@netlify/build'

interface PluginInputs { one: string }

export const onPreBuild: OnPreBuild<PluginInputs> = function({ inputs }) {
  console.log(inputs.one.trim())
}
