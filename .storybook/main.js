module.exports = {
  stories: ['../src/**/*/*.stories.tsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        // presets: [['react-app', { flow: false, typescript: true }]],
        presets: [require.resolve("babel-preset-react-app")]
      },
    },
    // {
    //   loader: require.resolve("react-docgen-typescript-loader"),
    //   options: {
    //     shouldExtractLiteralValuesFromEnum: true,
    //     propFilter: (prop) => {
    //       if (prop.parent) {
    //         return !prop.parent.fileName.includes('node_modules')
    //       }
    //       return true;
    //     }
    //   }
    // }
    {
      test: /\.(less)$/,
      loaders: ["style-loader", "css-loader", "less-loader"]
    }
    );
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
