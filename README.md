# startpage

![img](http://i.imgur.com/HGHWrxa.jpg)

> `ubuns` = hostname of machine where generated

## Usage

```
python3 startpage.py > ~/start.html
```

> [chrome extension to set new tab page](https://chrome.google.com/webstore/detail/new-tab-redirect/icpgjfneehieebagbmdbhnlpiopdcmna)

Some keybinds exist:

- `/` : focus search
- `j` : down a link
- `k` : up a link
- `enter` : if on link go to it. if search focused and no value, defocus to enable `j` and `k`

## Deets

#### Deps

- python3

#### Customization

Pass a custom config path:

```
python3 startpage.py --configpath ~/start_config.json > ~/start.html
```

A shortcut exists in the `Makefile` that does exactly this

```
make custom
```

Make sure to copy `config.json` to `~/start_config.json`

config example

```json
{
  "links": [
    {
      "name": "watch",
      "data": [
          [ "https://vimeo.com", "vimeo" ],
          [ "https://youtube.com", "youtube" ]
      ]
    },
    {
      "name": "read",
      "data": [
          [ "https://reddit.com", "reddit" ]
      ]
    },
    {
      "name": "buy",
      "data": [
          [ "https://amazon.com", "amazon" ]
      ]
    }
  ]
}
```

#### Test

```
make
```

> Creates an `index.html` in directory
> Does not account for config changes (yet)

#### Ideas

- [ ] configure colors
- [ ] configure link keybinds
- [ ] configure group keybinds (open in new window)
