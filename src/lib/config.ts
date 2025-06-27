const defaults = {
  workspaceName: "Your Workspace Name",
};

export const config = {
  workspaceName:
    process.env.NEXT_PUBLIC_WORKSPACE_NAME || defaults.workspaceName,
} as const;
