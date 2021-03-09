import {request} from "network/request";

export function getDetail(iid) {
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

export function getRecommends(){
  return request({
    url:'/recommend'
  })
}



export class Goods{
  constructor(itemInfo,columns,services) {
    this.title = itemInfo.title
    this.newprice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
  }
}

export class Shop{
  constructor(shopInfo) {
    this.fans = shopInfo.cFans
    this.goodsCount = shopInfo.cGoods
    this.sells = shopInfo.cSells
    this.name = shopInfo.name
    this.score = shopInfo.score
    this.logo = shopInfo.shopLogo
  }
}

export class Params{
  constructor(info,rule) {
    this.image = info.images ? info.images [0] : ""
    this.set = info.set
    this.size = rule.tables
  }
}

