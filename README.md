# startpage

Super cool startpage.

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

config example

```json
{
  "links": [
    {
      "type": "link_list",
      "name": "watch",
      "data": [
          [ "https://vimeo.com", "vimeo" ],
          [ "https://youtube.com", "youtube" ]
      ]
    },
    {
      "type": "link_list",
      "name": "read",
      "data": [
          [ "https://reddit.com", "reddit" ]
      ]
    },
    {
      "type": "link_list",
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
