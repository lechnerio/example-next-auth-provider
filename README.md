# test-auth

test-auth is a simple repository to explore and test various authentication providers using **next-auth**.

## How to use test-auth

### Authentication Secret

The `NEXTAUTH_SECRET` is a critical piece of security for your NextAuth configuration. It is used to encrypt and sign session tokens. You only need to generate this secret **once**, regardless of how many authentication providers you add to your app.

To generate the secret, you can use the following command in Node.js:

```javascript
require("crypto").randomBytes(32).toString("hex")
```

or in the browser console:
```javascript
crypto.getRandomValues(new Uint8Array(32)).reduce((acc,byte) => acc+byte.toString(16).padStart(2, '0'), '')
```

Once generated, add it to your .env.local file like this:

```
NEXTAUTH_SECRET=your_generated_secret_key
```

This key is shared across all providers and ensures that session tokens are secured properly.

### Auth Providers

#### GitHub

1. **Create a New OAuth App** in your GitHub Developer settings.
2. Set both the **Homepage URL** and **Authorization Callback URL** to `http://localhost:3000`.
3. **Generate a new Client Secret** for your OAuth App.
4. Replace the required keys in the `.env.local` file with the following:

   - Your GitHub **Client ID** `AUTH_GITHUB_ID`
   - Your GitHub **Client Secret** `AUTH_GITHUB_SECRET`

#### Google

1. **Go to Google Cloud Console** at [console.cloud.google.com](https://console.cloud.google.com/).
2. **Create a new project**.
3. Navigate to **APIs & Services** > **OAuth consent screen** and configure the consent screen (External or Internal).
4. **Create OAuth credentials** in **APIs & Services** > **Credentials**:

   - Select **Web Application** as the application type.
   - Set **Authorized redirect URIs** to `http://localhost:3000/api/auth/callback/google`.
   - Save the **Client ID** and **Client Secret**.

5. Add the following to your `.env.local` file:

   - Your Google **Client ID** `GOOGLE_CLIENT_ID`
   - Your Google **Client Secret** `GOOGLE_CLIENT_SECRET`

### Running the Project

1. Install project dependencies with the following command:

   ```bash
   npm install
   ```

2. Start the development server using:

   ```bash
   npm run dev
   ```

   The app should now be running locally on `http://localhost:3000`.

## Contributors

Thanks to these awesome people for their contributions!

| Contributors |
|:---:|
|[![lechnerio](https://github.com/lechnerio.png?size=50)](https://github.com/lechnerio)<br/> lechnerio|

Feel free to use this example, and if you'd like to contribute, you’re more than welcome to add yourself to the contributors list and submit a pull request!
