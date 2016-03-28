# startpage

Super cool startpage.

![img](http://i.imgur.com/Etst3YH.jpg)

## Usage

```
python3 startpage.py > ~/start.html
```

## Deets

#### Deps

- python3

#### Customization

```
python3 startpage.py --configpath ~/start_config.json > ~/start.html

// ex. ~/start_config.json
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
