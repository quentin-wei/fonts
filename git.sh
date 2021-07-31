#!/bin/sh
subMsg=$1

if branch=$(git symbolic-ref --short -q HEAD)
then
  echo $branch
else
  echo not on any branch
  exit
fi

if [ ! -n "$subMsg" ]; then
  echo "not commit msg"
  git plo $branch
  exit
fi

if [ -n "$branch" ]; then
  git plo $branch
  git st
  git add .
  git cm "$subMsg"
  git pho $branch
fi


