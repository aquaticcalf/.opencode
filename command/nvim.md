---
description: open nvim editor
---

use `open-nvim` tool with $ARGUMENTS

find the file in the above line and open it with nvim, if there is no file specified, just open nvim at .

always use the current directory as nvim's working directory, unless specified otherwise

this rule applies even if the file is specified with an absolute path

the file path should be relative to the current directory, and should be passed as the `file` parameter to `open-nvim` tool

if the file path does not exist, but there is a similar file that exists differing by case or minor typos, open that file instead
