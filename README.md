<div align="center">
  <a href="#"><img src="https://socialmedialab.ca/wp-content/uploads/2022/05/TMU_TRSM_SocialMediaLab_transparent_WHITE-1.png.webp" height="50px" /></a>
  <h1>Social Media Lab's Fact Check Assistant<h3>An OpenAI-powered bot for simple fact checking | Un bot alimenté par OpenAI pour vérification simple des faits.</h3></h1>
  <a href="https://factcheckassistant.socialmedialab.ca/" target="_blank">
    <img src="https://factcheckassistant.socialmedialab.ca/assets/img/avataaars.svg" height="200px" />
  </a>
</div>

## ❔About | À propos
[![React](https://img.shields.io/badge/made%20with%20react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](#)
[![Vercel](https://img.shields.io/badge/deployed%20with%20vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)](#)

Live Example of this demo app | Exemple en direct de cette application de démonstration
https://factcheckassistant.socialmedialab.ca

The Social Media Lab's Fact Check Assistant is an AI-powered bot for simple fact checking. It was created as a proof of concept for the Social Media Lab’s 2023 Canadian #AI Misinformation Hackathon. The app uses OpenAI API capabilities to facilitate simple fact checking. Please be aware that OpenAI has very limited knowledge of the world and events after 2021 and that while OpenAI has put safeguards in place, their system may occasionally generate incorrect or misleading information and produce offensive or biased content.

--------------

L'Assistant de vérification des faits du Social Media Lab est un robot alimenté par l'IA pour vérifier simplement les faits. Il a été créé comme une preuve de concept pour le Hackathon canadien #IA sur la désinformation 2023 du Social Media Lab. L'application utilise les capacités de l'API OpenAI pour faciliter la vérification simple des faits. Veuillez noter qu'OpenAI a une connaissance très limitée du monde et des événements après 2021 et que, bien qu'OpenAI ait mis en place des dispositifs de sécurité, leur système peut occasionnellement générer des informations incorrectes ou trompeuses et produire un contenu offensant ou biaisé.


## ❗Disclaimer | Avertissement
This app is provided “as is” without any warranty of accuracy, reliability, completeness, efficiency, timeliness, or correct sequencing of such information or otherwise, either express or implied. Reliance on any information provided by this app is solely at your own risk. We suggest verifying information provided here by consulting additional sources.

--------------

Cette application est fournie « telle quelle » sans aucune garantie d'exactitude, de fiabilité, d'exhaustivité, d'efficacité, de ponctualité ou de séquencement correct de ces informations ou autre, explicite ou implicite. Le fait de se fier à toute information fournie par cette application est entièrement à vos propres risques. Nous suggérons de vérifier les informations fournies ici en consultant des sources supplémentaires.

## ⬆️ Deploy Your Own | Déployez le vôtre
Deploy your own copy of this app with Vercel | Déployez votre propre copie de cette application avec Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/smlabto/factcheckassistant&template=create-react-app)

### Steps to follow to quickly setup your own version
*The application has been updated to make use of Cloudflares AI API rather than OpenAI.
1. Hit the Deploy with Vercel button above. Setup an account with Vercel if you haven't already, and follow the app deployment steps through Vercel.
2. Follow all the steps [here to setup](https://developers.cloudflare.com/workers-ai/get-started/rest-api/) an API token and Account ID with Cloudflare.
3. Create two environment variables in your Vercel project by clicking on your project in the Vercel Dashboard, then going to  
`Settings > Environment Variables`. Here you must add these two environment variables: `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_API_TOKEN`
4. Paste your Cloudflare Account ID into `CLOUDFLARE_ACCOUNT_ID` and your Cloudflare API Token into `CLOUDFLARE_API_TOKEN`

--------------

### Étapes à suivre pour configurer rapidement votre propre version
*L'application a été mise à jour pour utiliser l'API AI de Cloudflares plutôt que celle d'OpenAI.
1. Cliquez sur le bouton Déployer avec Vercel ci-dessus. Créez un compte avec Vercel si ce n'est pas déjà fait, et suivez les étapes de déploiement de l'application via Vercel.
2. Suivez toutes les étapes [ici pour configurer](https://developers.cloudflare.com/workers-ai/get-started/rest-api/) un jeton API et un ID de compte avec Cloudflare.
3. Créez deux variables d'environnement dans votre projet Vercel en cliquant sur votre projet dans le tableau de bord Vercel, puis en allant à  
`Settings > Environment Variables`. Ici vous pouvez ajouter ces deux variables d'environnement : `CLOUDFLARE_ACCOUNT_ID` et `CLOUDFLARE_API_TOKEN`.
4. Collez votre ID de compte Cloudflare dans `CLOUDFLARE_ACCOUNT_ID` et votre Token API Cloudflare dans `CLOUDFLARE_API_TOKEN`.


--------------

The project is funded by the Government of Canada via the Digital Citizen Contribution Program.


