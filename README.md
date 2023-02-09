<div align="center">
  <a href="#"><img src="https://socialmedialab.ca/wp-content/uploads/2022/05/TMU_TRSM_SocialMediaLab_transparent_WHITE-1.png.webp" height="50px" /></a>
  <h1>Social Media Lab's Fact Check Assistant<h3>An OpenAI-powered bot for simple fact checking.</h3></h1>
  <a href="https://factcheckassistant.socialmedialab.ca/" target="_blank">
    <img src="https://factcheckassistant.socialmedialab.ca/assets/img/avataaars.svg" height="200px" />
  </a>
</div>

## ❔About
[![React](https://img.shields.io/badge/made%20with%20react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](#)
[![Vercel](https://img.shields.io/badge/deployed%20with%20vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)](#)

Live Example of this demo app: https://factcheckassistant.socialmedialab.ca

The Social Media Lab's Fact Check Assistant is an AI-powered bot for simple fact checking. It was created as a proof of concept for the Social Media Lab’s 2023 Canadian #AI Misinformation Hackathon. The app uses OpenAI API capabilities to facilitate simple fact checking. Please be aware that OpenAI has very limited knowledge of the world and events after 2021 and that while OpenAI has put safeguards in place, their system may occasionally generate incorrect or misleading information and produce offensive or biased content.

## ❗Disclaimer
This app is provided “as is” without any warranty of accuracy, reliability, completeness, efficiency, timeliness, or correct sequencing of such information or otherwise, either express or implied. Reliance on any information provided by this app is solely at your own risk. We suggest verifying information provided here by consulting additional sources.

## ⬆️ Deploy Your Own
Deploy your own copy of this app with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/smlabto/factcheckassistant&template=create-react-app)

### Steps to follow to quickly setup your own version
1. Hit the Deploy with Vercel button above. Setup an account with Vercel if you haven't already, and follow the app deployment steps through Vercel. 
2. Register an account with OpenAI API. https://openai.com/api/
3. Create/Access your OpenAI API key by selecting `View API keys` under your profile icon.
4. Copy your OpenAI API key to later add it as an environment variable in your Vercel application.
5. Add the API Key to your Vercel app as an Environment Variable by selecting your project in the Vercel Dashboard, then go to  
`Settings > Environment Variables`. Here you can create environment variables.

   Create an environment variable and name it `OPENAI_API_KEY` within Vercel. This is the name the Fact Check Assistant project uses to access this key by default. The name can be edited within the project in the `.env.production` file.
