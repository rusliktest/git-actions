Git actions tests

Изначально у меня не получалось запушить, так как я был залогинен с другого аккаунта. Чтобы это исправить:
- .git/config
- поменять `url` на: `https://youruser:password@github.com/user/repo.git`

# Hello world javascript action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

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