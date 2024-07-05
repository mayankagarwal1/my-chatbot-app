import path from 'path';
import { fileURLToPath } from 'url';
import tsNode from 'ts-node';
import webpack from 'webpack';

// Register ts-node to handle TypeScript files
tsNode.register();

// Define __dirname and __filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import your webpack configuration file
const webpackConfig = await import('./webpack.config.ts');

// Webpack configuration
const config = {
  mode: 'production',
  entry: './src/chatbot.tsx', // Entry point of your TypeScript React component
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'my-component.bundle.js', // Output bundle filename
    library: 'MyComponent', // Expose your component as a global variable
    libraryTarget: 'umd', // Universal Module Definition (allows usage in various environments)
    globalObject: 'this', // Ensures the correct global object is used (window in browsers, global in Node.js)
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'], // Resolve these file extensions
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Look for TypeScript and TSX files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'ts-loader', // Use ts-loader for TypeScript files
        },
      },
      {
        test: /\.(js|jsx)$/, // Look for JavaScript and JSX files (for potential dependencies)
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader', // Use babel-loader for JavaScript and JSX files
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Use babel presets for environment and React
          },
        },
      },
    ],
  },
};

// Export the configuration
export default config;
