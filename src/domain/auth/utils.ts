export const fetchIssuesCount = (
  org: string,
  repo: string
): AppThunk => async dispatch => {
  try {
    const repoDetails = await getRepoDetails(org, repo);
    dispatch(getRepoDetailsSuccess(repoDetails));
  } catch (err) {
    dispatch(getRepoDetailsFailed(err.toString()));
  }
};
