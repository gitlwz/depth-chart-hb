# depth-chart-hb

## 安装
```sh
npm install react-redux
```

## init

`deptchChart(element,option)`

```js
let chart = deptchChart(
            document.querySelector("#depth-chart"),
            {
                "priceFix": 2,
                "amountFix": 1,
                "lang": "zh-cn",
                "theme": "hb-night",
                "color": "#61688A",
                "tipColor": "#CAD7E0",
                "bgColor": "rgba(0, 0, 0, 0.8)",
                "bidsLineColor": "rgba(65, 179, 125, 1)",
                "asksLineColor": "rgba(215, 78, 90, 1)",
                "axisColor": "rgba(97, 104, 138, .3)",
                "langMap": {
                    "zh-cn": { "委托价": "委托价", "累计": "累计" },
                    "zh-hk": { "委托价": "委託價", "累计": "累計" },
                    "en-us": { "委托价": "Price", "累计": "Sum" },
                    "de-de": { "委托价": "Preis", "累计": "Total" },
                    "ru-ru": { "委托价": "Цена", "累计": "Объём" },
                    "ko-kr": { "委托价": "위탁단가", "累计": "누적량" },
                    "fr-fr": { "委托价": "Prix", "累计": "Somme" },
                    "es-es": { "委托价": "Precio", "累计": "Suma" },
                    "th-th": { "委托价": "ราคาสั่งซื้อ", "累计": "ทยอยสะสม" },
                    "vi-vi": { "委托价": "Giá lệnh", "累计": "Lũy kế" },
                    "tr-tr": { "委托价": "Fiyat", "累计": "Sum" },
                    "pt-pt": { "委托价": "O Preço", "累计": "Total" },
                    "pt-br": { "委托价": "O Preço", "累计": "Total" }
                }
            }
        )
```


## option

| 字段        | 默认值   |
| --------   | -----:  |
| theme     | hb-night (hb-night|hb-day)|
| priceFix        |   2   | 
| amountFix        |    0    |
| paddingTop        |    15    |
| lang        |    en-us    |

### option主题颜色
| 字段        | 默认值   |
| --------   | -----:  |
| bidsLineColor     | rgba(0, 141, 115, 1)|
| asksLineColor        |   rgba(236, 49, 75, 1)   | 
| bidsFillColor        |    rgba(0, 141, 115, .2)    |
| asksFillColor        |    rgba(236, 49, 75, .2)    |
| axisColor        |    rgba(97, 104, 138, .3)    |
| color        |    rgba(81, 128, 159, .8)    |
| bgColor        |    rgba(23, 54, 72, .95)    |
| tipColor        |    #C7CCE6    |

### langMap

```js
"zh-cn": { "委托价": "委托价", "累计": "累计" },
"zh-hk": { "委托价": "委託價", "累计": "累計" },
"en-us": { "委托价": "Price", "累计": "Sum" },
"de-de": { "委托价": "Preis", "累计": "Total" },
"ru-ru": { "委托价": "Цена", "累计": "Объём" },
"ko-kr": { "委托价": "위탁단가", "累计": "누적량" },
"fr-fr": { "委托价": "Prix", "累计": "Somme" },
"es-es": { "委托价": "Precio", "累计": "Suma" },
"th-th": { "委托价": "ราคาสั่งซื้อ", "累计": "ทยอยสะสม" },
"vi-vi": { "委托价": "Giá lệnh", "累计": "Lũy kế" },
"tr-tr": { "委托价": "Fiyat", "累计": "Sum" },
"pt-pt": { "委托价": "O Preço", "累计": "Total" },
"pt-br": { "委托价": "O Preço", "累计": "Total" }
```


## api

### putData(data)  更新数据，主要方法

```js
var data = {
            "bids": [
                [3.935681175, 0],
                [3.93371235, 0],
                [3.931743525, 151.8274],
                [3.9297747, 156.0197],
                [3.927805875, 67.803],
                [3.92583705, 0],
                [3.923868225, 53.0589],
                [3.9218994, 474.1374],
                [3.919930575, 0],
                [3.91796175, 0],
                [3.915992925, 0],
            ],
            "asks": [
                [3.939618825, 0],
                [3.94158765, 0],
                [3.943556475, 75.6],
                [3.9455253, 284.4],
                [3.947494125, 0],
                [3.94946295, 0],
                [3.951431775, 60.586],
                [3.9534006, 33.2176],
                [3.955369425, 108.8682],
                [3.95733825, 0],
                [3.959307075, 0]
            ],
            "version": 100570970085
        }
        let chart = deptchChart(
            document.querySelector("#depth-chart"),
            {}
        )
        chart.putData(data)

```

### forceUpdate() 强制更新

### reload(option) 修改配置

### initTheme(themeColorMap) 修改主题