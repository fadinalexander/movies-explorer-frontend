const data = [
  {
    id: 1,
    isLiked: false,
    name: '33 слова о дизайне',
    duration: 30,
    thumbnail: 'https://plus.unsplash.com/premium_photo-1676511256123-35dae201e390?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',

  },
  {
    id: 2,
    isLiked: true,
    name: 'Киноальманах «100 лет дизайна»',
    duration: 45,
    thumbnail: 'https://images.unsplash.com/photo-1694631031738-0e857f3e872a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80'
  },
  {
    id: 3,
    name: 'В погоне за Бенкси',
    isLiked: false,
    duration: 60,
    thumbnail: 'https://images.unsplash.com/photo-1681155361958-d51298bcb13a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  },
  {
    id: 4,
    isLiked: true,
    name: 'Баския: Взрыв реальности',
    duration: 75,
    thumbnail: 'https://images.unsplash.com/photo-1694832397746-b98886879b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80'
  },
  {
    id: 5,
    isLiked: false,
    name: 'Бег это свобода',
    duration: 90,
    thumbnail: 'https://plus.unsplash.com/premium_photo-1677260349790-b3372d0acc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  },
  {
    id: 6,
    isLiked: true,
    name: 'Книготорговцы',
    duration: 105,
    thumbnail: 'https://plus.unsplash.com/premium_photo-1695219820032-34cfa7950b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80'
  },
  {
    id: 7,
    isLiked: false,
    name: 'Когда я думаю о Германии ночью',
    duration: 120,
    thumbnail: 'https://images.unsplash.com/photo-1694789309553-0c4ef0450884?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 8,
    isLiked: true,
    name: 'Gimme Danger: История Игги и The Stooges',
    duration: 135,
    thumbnail: 'https://images.unsplash.com/photo-1695032631902-2a00afff6f0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  },
  {
    id: 9,
    isLiked: false,
    name: 'Дженис: Маленькая девочка грустит',
    duration: 150,
    thumbnail: 'https://images.unsplash.com/photo-1694087784448-4a5472c5fa4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80'
  },
  {
    id: 10,
    isLiked: true,
    name: 'Соберись перед прыжком',
    duration: 165,
    thumbnail: 'https://images.unsplash.com/photo-1691637708314-48dd49655487?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80'
  },
  {
    id: 11,
    isLiked: false,
    name: 'Пи Джей Харви: A dog called money',
    duration: 180,
    thumbnail: 'https://images.unsplash.com/photo-1694677987984-219c3f023999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1947&q=80'
  },
  {
    id: 12,
    isLiked: true,
    name: 'По волнам: Искусство звука в кино',
    duration: 195,
    thumbnail: 'https://images.unsplash.com/photo-1694182122177-c7b8778a4025?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1982&q=80'
  },
  {
    id: 13,
    isLiked: true,
    name: 'Поворот не туда',
    duration: 10,
    thumbnail: 'https://images.unsplash.com/photo-1694618221680-c294a88d86e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1922&q=80'
  },
  {
    id: 14,
    isLiked: false,
    name: 'Поворот туда',
    duration: 15,
    thumbnail: 'https://images.unsplash.com/photo-1694810792161-412a50ce1e1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  },
  {
    id: 15,
    isLiked: true,
    name: 'Поворот почти туда куда надо',
    duration: 5,
    thumbnail: 'https://images.unsplash.com/photo-1694387937263-f07b092c8d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80'
  }
]

export default data