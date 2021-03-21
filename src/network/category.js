import {request} from "network/request";

export function getCategory(){
  return request({
    url:'/category'
  })
}

export function getSubcategory(maitKey){
  return request({
    url:'/subcategory',
    params:{
      maitKey
    }
  })
}

export function getSubCategoriesDetail(miniWallkey,type){
  return request({
    url:'/subcategory/detail',
    params:{
      miniWallkey,
      type
    }
  })
}
