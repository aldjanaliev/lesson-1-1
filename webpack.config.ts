import path from 'path'
import webpack from 'webpack'
import { buildWebpuckConfig } from './config/build/buildWebpackConfig'
import { BuildPaths } from './config/build/types/config'

const paths:BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
}

const mode = "development"
const isDev = mode === 'development'

const config: webpack.Configuration = buildWebpuckConfig({
    mode: "development",
    paths,
    isDev
})

export default config