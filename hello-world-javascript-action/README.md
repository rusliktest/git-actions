# Как создать?
`https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action#testing-out-your-action-in-a-workflow`

uses: `rusliktest/hello-world-javascript-action@v1.3`
Имя гита + имя репозитория + тег с версией

# Hello world javascript action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Build
`npm run build` - соберёт билд в dist

## Inputs

## `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

## `time`

The time we greeted you.

## Example usage

uses: actions/hello-world-javascript-action@v1.1
with:
  who-to-greet: 'Mona the Octocat'