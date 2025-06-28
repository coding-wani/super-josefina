const defaults = {
  workspaceName: "Workspace Name",
  appName: "App Name",
};

export const config = {
  workspaceName:
    process.env.NEXT_PUBLIC_WORKSPACE_NAME || defaults.workspaceName,
  appName: process.env.NEXT_PUBLIC_APP_NAME || defaults.appName,
} as const;
