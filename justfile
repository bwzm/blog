git *args:
  GIT_SSH_COMMAND='ssh -i ~/.ssh/id_bzm_ed25519 -o IdentitiesOnly=yes' git {{args}}

push:
  just git push origin "$(git_current_branch)"
