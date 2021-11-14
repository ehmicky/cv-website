import type { OnPreBuild, NetlifyConfig, NetlifyPluginConstants } from '@netlify/build'

interface PluginInputs { one: number }

export const onPreBuild: OnPreBuild<PluginInputs> = function({ inputs }) {
  console.log(inputs.one.trim())
}
