/// <reference types="svelte" />
interface ImportMeta {
  env: {
    VITE_AWS_PROJECT_REGION?: string;
    VITE_AWS_COGNITO_IDENTITY_POOL_ID?: string;
    VITE_AWS_COGNITO_REGION?: string;
    VITE_AWS_USER_POOL_ID?: string;
    VITE_AWS_USER_POOL_WEB_CLIENT_ID?: string;
  };
}
