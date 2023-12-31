import webpack from 'webpack'

import { BuildOptions } from "./types/config";
import { buildPlagins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const {paths, mode, isDev} = options;

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlagins(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(),
    devServer: isDev ? buildDevServer(options) : undefined,
  }
}