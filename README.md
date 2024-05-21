<a href="https://flotiq.com/">
    <img src="https://editor.flotiq.com/fonts/fq-logo.svg" alt="Flotiq logo" title="Flotiq" align="right" height="60" />
</a>

Next JS starter shop 2 with Flotiq source
===========================

Kick off your project with this shop 2 boilerplate. This starter ships with the main Next JS configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.
Check out live demo: [https://flotiq-nextjs-shop-2.netlify.app](https://flotiq-nextjs-shop-2.netlify.app) 

## Quick start

1. **Start the project from template**

    ```bash
    git clone https://github.com/flotiq/flotiq-nextjs-shop-2.git flotiq-nextjs-shop-2
    ```
2. **Import example data from starter to Flotiq**
   
   ```bash
   npm i -g flotiq-cli
   cd flotiq-nextjs-shop-2
   flotiq import . [flotiqApiKey]
   ```
   _Note: You need to put your Read and write API key as the `flotiqApiKey` for import to work, You don't need any content types in your account._

3. **Configure application**

   The next step is to configure our application to know from where it has to fetch the data.
   Flotiq provides a tool for automatically populating `.env` files with your Flotiq API keys.

   ```bash
   npx flotiq-setup
   ```
    After executing this command, a browser window will open with the Flotiq login screen. Upon successful authentication,
    the command will automatically generate appropriately filled .env files for you.

    _Note: If there are existing .env files in the project, flotiq-setup may overwrite them._

    and add api key:

    ```
    SNIPCART_API_KEY=YOUR SNIPCART API KEY
    NEXT_PUBLIC_GA_ID=YOUR GA API KEY
    ```
    To add `SNIPCART API KEY` to your starter you need to log in to the website: https://snipcart.com/

    After this you need to get into your account options and choose `API KEYS` line or you can just click [in the link.](   https://app.snipcart.com/dashboard/account/credentials)

    To see how snipcart shop is working you need to copy `PUBLIC TEST API KEY` and paste it into your `.env` file instead `YOUR SNIPCART API KEY`.

    You need to remember that this is just for test look, to get fully working snipcart shop for commercial use you need to buy it on the website.
    `PUBLIC TEST API KEY` below is just an example, it won't work!

   ![image](https://user-images.githubusercontent.com/110597769/197960204-d6128d53-aa1d-4dd8-a482-886ea55296a1.png)

4. **Install dependencies**

   Navigate into your new site’s directory and run

   ```bash
   yarn install
   ```

5. **Flotiq codegen**

   This package simplifies Typescript Fetch API integration for your Flotiq project, tailored to your Flotiq account
   data. To build your customized API package, just run this command:

   ```bash
   npx flotiq-codegen-ts generate --compiled-js
   ```

   Now, in your project, you can use the `FlotiqApi` class for easy and convenient communication with the Flotiq API.

   ```javascript
      import {FlotiqApi} from '../flotiqApi/index';
      
      const api = new FlotiqApi(apiKey);
   ```

   Examples of its usage can be found in the `lib/shop.js` file of this project or can be explored in the
   [flotiq-codegen-ts repository](https://github.com/flotiq/flotiq-codegen-ts)

   _Note: If you make any changes (additions or deletions) to the `content type definitions` in your Flotiq account, you will need to rerun `npx flotiq-codegen-ts generate --compiled-js` command._

   
6. **Start developing.**

   Navigate into your new site’s directory and start it up.

    ```shell
    yarn dev
    ```

7. **Open the source code and start editing!**

   Your site is now running at `http://localhost:3000`!

   Open the `flotiq-nextjs-shop-2` directory in your code editor of choice and edit `pages/[page].js`. Save your changes and the browser will update in real time!

8. **Manage your content using Flotiq editor**

   You can now easily manage your content using [Flotiq editor](https://editor.flotiq.com)

   _Note: If you are using `FlotiqApi` generated from `flotiq-codegen-ts` remember to rerun `npx flotiq-codegen-ts generate --compiled-js`
   command after changes (additions or edits) to the `content type definitions` in your Flotiq_

## Deploy

Deploy this starter with one click on [Vercel](https://vercel.com/):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fflotiq%2Fflotiq-nextjs-shop-2)

You can also deploy this project to [Heroku](https://www.heroku.com/) in 3 minutes:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https%3A%2F%2Fgithub.com%2Fflotiq%2Fflotiq-nextjs-shop-2)

Or to [Netlify](https://www.netlify.com/):

[![Deploy](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https%3A%2F%2Fgithub.com%2Fflotiq%2Fflotiq-nextjs-shop-2)

## Learning Next.js

Looking for more guidance? Full documentation for Next.js lives [on the website](https://nextjs.org/). Here are some places to start:

- **To dive straight into code samples, head [to the Next.js documentation](https://nextjs.org/docs/getting-started).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## Collaborating

If you wish to talk with us about this project, feel free to hop on our [![Discord Chat](https://img.shields.io/discord/682699728454025410.svg)](https://discord.gg/FwXcHnX).

If you found a bug, please report it in [issues](https://github.com/flotiq/flotiq-nextjs-shop-2/issues).
