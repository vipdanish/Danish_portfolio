# Deploying to Vercel

Follow these steps to deploy your portfolio to Vercel:

1. **Create a Vercel Account**
   - Go to [vercel.com](https://vercel.com) and sign up with your GitHub account

2. **Install Vercel CLI (Optional)**
   ```
   npm install -g vercel
   ```

3. **Deploy via GitHub**
   - Push your code to a GitHub repository
   - Go to the Vercel dashboard and click "New Project"
   - Import your GitHub repository
   - Configure the project:
     - Framework Preset: Vite
     - Build Command: npm run build
     - Output Directory: dist
   - Click "Deploy"

4. **Deploy via CLI (Alternative)**
   - Run `vercel login` to authenticate
   - Navigate to your project directory
   - Run `vercel` to deploy
   - Follow the prompts

5. **Configure Custom Domain (Optional)**
   - In the Vercel dashboard, go to your project
   - Click on "Domains"
   - Add your custom domain and follow the instructions

Your portfolio is now deployed and will automatically update whenever you push changes to your repository!
