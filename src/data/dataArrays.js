export const categories = [
  {
    id: 3,
    name: 'Hamburguesas',
    photo_url:
    'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80'
  },
  {
    id: 1,
    name: 'Comida Mexicana',
    photo_url: 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg'
  },
  {
    id: 2,
    name: 'Comida Italiana',
    photo_url:
      'https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
  },
  {
    id: 4,
    name: 'Postres',
    photo_url:
    'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
  },
  {
    id: 5,
    name: 'Bebidas',
    photo_url:
    'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
];

export const recipes = [
  {
    recipeId: 122,
    categoryId: 3,
    title: 'Hamburguesa Sencilla',
    photo_url: 'https://plus.unsplash.com/premium_photo-1673581152330-77f2f373ce54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    photosArray: [
      'https://plus.unsplash.com/premium_photo-1673581152330-77f2f373ce54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    ],
    time: '15',
    ingredients: [[25, '150g'], [36, '5g'], [54, '300g'], [0, '40']],
    description:
      ' Para empezar, el pan de hamburguesa debe ser suave y fresco, con una textura esponjosa pero firme que permita sostener todos los ingredientes sin que se desmorone. Es importante tostar ligeramente los panes para que tengan una textura crujiente por fuera y suave por dentro. \n\n La carne de res es uno de los ingredientes clave de una hamburguesa sencilla y debe ser jugosa y bien sazonada. La mejor opción es elegir una carne fresca y molerla en casa, aunque también puedes comprar carne molida de alta calidad. Es importante sazonar la carne con sal y pimienta al gusto antes de ponerla a la parrilla para realzar su sabor. \n\n Para complementar la carne, se pueden agregar lechuga fresca y crujiente, tomate maduro y rebanado, y cebolla morada picada finamente. Estos ingredientes le darán un toque de frescura y textura a la hamburguesa. \n\n Otro elemento clave es el queso cheddar derretido encima de la carne. El queso debe ser de buena calidad, con un sabor suave y cremoso que se derrita fácilmente. Puedes colocar una rebanada de queso cheddar encima de la carne y dejar que se derrita durante un minuto antes de retirar la hamburguesa de la parrilla.'
  },
  {
    recipeId: 3,
    categoryId: 3,
    title: 'Hamburguesa Especial',
    photo_url:
      'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
    photosArray: [
      'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
    ],
    time: '10',
    ingredients: [[25, '150g'], [36, '5g'], [54, '300g'], [0, '40g'], [2, '100g']
    ],
    description: 'Pan de hamburguesa de brioche tostado en mantequilla y espolvoreado con semillas de sésamo.\n\n Una carne de res Angus de alta calidad, sazonada con una mezcla de especias ahumadas y asada a la parrilla para obtener un exterior crujiente y un interior jugoso. \n\n Queso gouda ahumado derretido sobre la carne para dar un sabor rico y cremoso. \n\n Cebolla caramelizada y tocino crujiente para aportar un contraste dulce-salado y una textura crujiente. \n\n Lechuga y tomate frescos para aportar una textura crujiente y un sabor refrescante. \n\n Una mayonesa casera de ajo y chipotle para un toque picante y ahumado.'
  },
  {
    recipeId: 2,
    categoryId: 1,
    title: 'Tacos de Carnitas',
    photo_url: 'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80',
    photosArray: [
      'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80',
    ],
    time: '30',
    ingredients: [
      // [0, '2 quarts'],
      // [16, '1'],
      // [12, '1 cup'],
      [1, '2 teaspoons'],
      [4, '1/4 teaspoons'],
      [7, '1/8 teaspoons'],
      [20, '1/2 teaspoons'],
      [21, '4']
    ],
    description:
      '-- Carnitas de cerdo tiernas y jugosas, cocidas a fuego lento durante horas en una mezcla de manteca de cerdo, jugo de naranja y especias para darle un sabor delicioso y un aroma irresistible. \n\n Tortillas de maíz recién hechas, suaves y calientes, con un sabor a maíz tostado que complementa perfectamente la carne. \n\n Cebolla blanca picada finamente para aportar un toque crujiente y un sabor suave. \n\n Cilantro fresco picado para añadir un toque de frescura y aroma a la carne. \n\n Salsa de tomate fresco y picante para dar un toque de acidez y picor a la carne. \n\n Limón fresco para añadir un toque de acidez y realzar los sabores.'
  },
  {
    recipeId: 3,
    categoryId: 1,
    title: 'Tacos al Pastor',
    photo_url:
      'https://images.unsplash.com/photo-1613514785940-daed07799d9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    photosArray: [
      'https://images.unsplash.com/photo-1613514785940-daed07799d9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    ],
    time: '45',
    ingredients: [
      [27, '8'],
      [28, '2'],
      [29, '1 cup']
    ],
    description:
      'Carne de cerdo marinada en una mezcla de chiles secos, achiote, ajo y especias durante horas para obtener un sabor picante y ahumado. \n\n Tortillas de maíz recién hechas, suaves y calientes, con un sabor a maíz tostado que complementa perfectamente la carne. \n\n Cebolla blanca y cilantro fresco picado para aportar un toque crujiente y un sabor fresco. \n\n Piña fresca cortada en cubos pequeños para aportar un toque de dulzura y acidez. \n\n Salsa roja picante hecha con chiles, tomate y especias para añadir un sabor intenso y picante a la carne. \n\n Limón fresco para añadir un toque de acidez y realzar los sabores.'
  },
  {
    recipeId: 1,
    categoryId: 2,
    title: 'Pizza Peperoni',
    photo_url: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80',
    photosArray: [
      'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80',
    ],
    time: '30',
    ingredients: [
      [1, '2 tablespoons'],
      [7, '1/2 teaspoons'],
      [17, '2 quarts']
    ],
    description:
      'Una base de masa de pizza delgada y crujiente, con una combinación perfecta de sabor a pan y una textura crujiente. \n\n Salsa de tomate fresco, hecha con tomates maduros y especias que aportan un sabor delicioso y equilibrado. \n\n Generosas rodajas de pepperoni, un salami de cerdo picante y curado que se dora en el horno y se vuelve crujiente. \n\n Queso mozzarella rallado, fundido y dorado en el horno para crear una capa suave y cremosa sobre la pizza. \n\n Un toque de orégano y pimienta negra para realzar los sabores.'
  },
  {
    recipeId: 4,
    categoryId: 2,
    title: 'Pizza Margarita',
    photo_url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    photosArray: [
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    ],
    time: '35',
    ingredients: [
      [1, '2 tablespoons'],
      [7, '1/2 teaspoons'],
      [17, '2 quarts']
    ],
    description:
      'Una base de masa de pizza delgada y crujiente, con un sabor a pan suave y una textura crujiente. \n\n Salsa de tomate fresco, hecha con tomates maduros y especias que aportan un sabor equilibrado y delicioso. \n\n Rodajas de tomate fresco, que añaden un sabor dulce y un toque jugoso a la pizza. \n\n Queso mozzarella fresco, cortado en rodajas y distribuido sobre la pizza. El queso mozzarella es suave y cremoso, lo que lo hace perfecto para fundir en la pizza. \n\n Hojas de albahaca fresca, añaden un sabor herbal y una textura crujiente a la pizza. \n\n Un toque de aceite de oliva para realzar los sabores.'
  },
  {
    recipeId: 5,
    categoryId: 2,
    title: 'Lasagna mixta',
    photo_url:
      'https://plus.unsplash.com/premium_photo-1668618296300-e301f8d2cef9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    photosArray: [
      'https://plus.unsplash.com/premium_photo-1668618296300-e301f8d2cef9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    ],
    time: 35,
    ingredients: [
    ],
    description:
      'Láminas de pasta al huevo, suaves y cocidas al dente. \n\n Una salsa boloñesa de carne, hecha con carne molida, cebolla, ajo, zanahorias y tomates frescos. La salsa se cocina lentamente para lograr una textura suave y una mezcla de sabores intensos. \n\n Una salsa bechamel cremosa y suave, hecha con leche, mantequilla y harina. \n\n Queso parmesano rallado, que se esparce entre las capas de pasta y salsa para añadir un sabor salado y cremoso a la lasaña. \n\n Queso mozzarella fresco, cortado en rodajas y distribuido por encima de la lasaña para crear una capa suave y cremosa en la parte superior. \n\n Una pizca de nuez moscada, para realzar los sabores y dar un toque de aroma sutil.'
  },
  {
    recipeId: 6,
    categoryId: 4,
    title: 'Donas',
    photo_url:
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    photosArray: [
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    ],
    time: 50,
    ingredients: [
      
    ],
    description:
      'Una masa suave y esponjosa, hecha con harina, azúcar, levadura, huevos, mantequilla y leche. La masa se mezcla y se amasa hasta que se vuelve suave y elástica. \n\n Una deliciosa glaseado hecho de azúcar glas, leche y extracto de vainilla. La glasa se mezcla hasta obtener una textura suave y sedosa que cubre perfectamente las donas. \n\n Opcionalmente, se pueden añadir otros ingredientes como chispas de chocolate, frutas deshidratadas o frutos secos para darle un toque extra de sabor y textura.'
  },
  {
    recipeId: 0,
    categoryId: 4,
    title: 'Brownie con helado',
    photo_url: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    photosArray: [
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",

    ],
    time: '15',
    ingredients: [],
    description:
      'Un brownie denso y suave hecho con chocolate oscuro, mantequilla, huevos, azúcar, harina y una pizca de sal. El brownie se hornea hasta que esté ligeramente crujiente por fuera y húmedo por dentro. \n\n Helado cremoso y suave, con un sabor que complementa el rico sabor a chocolate del brownie. \n\n Opcionalmente, se pueden añadir otros ingredientes como nueces, chispas de chocolate o salsa de caramelo para darle un toque extra de sabor y textura.'
  },
  {
    recipeId: 7,
    categoryId: 4,
    title: 'Galleta con chips de chocolate',
    photo_url: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    photosArray: [
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    ],
    time: 15,
    ingredients: [
    ],
    description:
      'Una masa suave y crujiente hecha con harina, azúcar, mantequilla, huevo, polvo de hornear, bicarbonato de sodio, extracto de vainilla y una pizca de sal. La masa se mezcla y se amasa hasta que se vuelve suave y fácil de trabajar. \n\n Chips de chocolate semidulces, que se derriten ligeramente en el horno y se mezclan con la masa para crear una textura suave y cremosa con trozos de chocolate derretido. \n\n Opcionalmente, se pueden añadir otros ingredientes como nueces, avena o coco rallado para darle un toque extra de sabor y textura.'
  },
  {
    recipeId: 8,
    categoryId: 5,
    title: 'Coca-Cola',
    photo_url: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
    photosArray: [
      'https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
    ],
    time: 15,
    ingredients: [
    ],
    description:
      'El sabor de la Coca-Cola es dulce y refrescante, con un equilibrio perfecto de sabores y aromas. El agua carbonatada le da a la bebida un agradable toque burbujeante y un ligero picor en la garganta, mientras que el jarabe de maíz de alta fructosa le aporta su característico sabor dulce.'
  },
  {
    recipeId: 9,
    categoryId: 5,
    title: 'Sprite',
    photo_url: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    photosArray: [
      'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    ],
    time: 15,
    ingredients: [
    ],
    description:
      'El sabor de la Sprite es fresco y agradablemente burbujeante, con un fuerte sabor cítrico que lo hace muy refrescante. El agua carbonatada le da a la bebida su característica burbujeante, mientras que el jarabe de maíz con alta fructosa le da su sabor dulce.'
  },
  {
    recipeId: 10,
    categoryId: 5,
    title: 'Fanta',
    photo_url: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=803&q=80',
    photosArray: [
      'https://images.unsplash.com/photo-1624517452488-04869289c4ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=803&q=80',
    ],
    time: 15,
    ingredients: [
    ],
    description:
      'La Fanta de naranja es una bebida burbujeante con un sabor dulce y afrutado a naranja. El agua carbonatada le da a la bebida su característica efervescencia, mientras que el jarabe de maíz con alta fructosa le da su dulzor.'
  },
];

export const ingredients = [
  {
    ingredientId: 0,
    name: 'Bread',
    photo_url: 'https://panaderiamontecarlo.com/wp-content/uploads/2021/03/Pan-de-hamburguesa-2-LION-DESIGN.png'
  },
  {
    ingredientId: 1,
    name: 'Salt',
    photo_url:
      'https://image.freepik.com/free-photo/sea-salt-wooden-bowl-isolated-white-background_29402-416.jpg'
  },
  {
    ingredientId: 2,
    name: 'Russet potatoes',
    photo_url: 'http://www.valleyspuds.com/wp-content/uploads/Russet-Potatoes-cut.jpg'
  },
  {
    ingredientId: 3,
    name: 'Paprika',
    photo_url:
      'https://image.freepik.com/free-photo/red-chilli-pepper-powder-isolated-white-background_55610-28.jpg'
  },
  {
    ingredientId: 4,
    name: 'Black Pepper',
    photo_url: 'https://ak0.picdn.net/shutterstock/videos/26741680/thumb/1.jpg'
  },
  {
    ingredientId: 5,
    name: 'Celery salt',
    photo_url: 'https://www.hasiroglugurme.com/images/urunler/Koftelik-Esmer-Bulgur-resim-297.jpg'
  },
  {
    ingredientId: 6,
    name: 'Dried sage',
    photo_url:
      'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/Esxjvv7/super-slow-motion-dried-sage-falling-on-white-background_n1xg2gxzg__F0000.png'
  },
  {
    ingredientId: 7,
    name: 'Garlic powder',
    photo_url:
      'https://us.123rf.com/450wm/belchonock/belchonock1808/belchonock180818180/106007144-bowl-of-dry-garlic-powder-on-white-background.jpg?ver=6'
  },
  {
    ingredientId: 8,
    name: 'Ground allspice',
    photo_url:
      'https://www.savoryspiceshop.com/content/mercury_modules/cart/items/2/6/9/2695/allspice-berries-jamaican-ground-1.jpg'
  },
  {
    ingredientId: 9,
    name: 'Dried oregano',
    photo_url: 'https://frutascharito.es/886-large_default/oregano.jpg'
  },
  {
    ingredientId: 10,
    name: 'Dried basil',
    photo_url: 'https://www.honeychop.com/wp-content/uploads/2015/09/Dried-Mint.png'
  },
  {
    ingredientId: 11,
    name: 'Dried marjoram',
    photo_url: 'https://images-na.ssl-images-amazon.com/images/I/71YATIBqBYL._SX355_.jpg'
  },
  {
    ingredientId: 12,
    name: 'All-purpose flour',
    photo_url:
      'https://images.assetsdelivery.com/compings_v2/seregam/seregam1309/seregam130900036.jpg'
  },
  {
    ingredientId: 13,
    name: 'Brown sugar',
    photo_url:
      'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/BALQTtekliuc6iu4u/rotating-brown-sugar-in-a-white-container-on-white-background_sis0xtbyl_thumbnail-full01.png'
  },
  {
    ingredientId: 14,
    name: 'Kosher salt',
    photo_url:
      'https://d1yn1kh78jj1rr.cloudfront.net/image/preview/r64-6MxPQjlatyfjp/storyblocks-top-view-of-ceramic-salt-cellar-with-coarse-grained-sea-salt-isolated-on-white-background_SPzKionPuV_SB_PM.jpg'
  },
  {
    ingredientId: 15,
    name: 'Whole chicken',
    photo_url:
      'https://image.shutterstock.com/image-photo/two-raw-chicken-drumsticks-isolated-260nw-632125991.jpg'
  },
  {
    ingredientId: 16,
    name: 'Eggs',
    photo_url:
      'https://image.shutterstock.com/image-photo/egg-whites-yolk-cup-isolated-260nw-1072453787.jpg'
  },
  {
    ingredientId: 17,
    name: 'Quarts neutral oil',
    photo_url:
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fgettyimages-464433694_0.jpg%3Fitok%3DK42YR2GV&w=400&c=sc&poi=face&q=85'
  },
  {
    ingredientId: 18,
    name: 'Water',
    photo_url: 'https://ak1.picdn.net/shutterstock/videos/829561/thumb/11.jpg'
  },
  {
    ingredientId: 19,
    name: 'Onion Powder',
    photo_url:
      'https://image.shutterstock.com/image-photo/mixed-spices-isolated-on-white-260nw-662383828.jpg'
  },
  {
    ingredientId: 20,
    name: 'MSG',
    photo_url:
      'https://img.freepik.com/free-photo/monosodium-glutamate-wood-spoon-white-background_55883-399.jpg?size=626&ext=jpg'
  },
  {
    ingredientId: 21,
    name: 'Chicken Breast',
    photo_url:
      'https://us.123rf.com/450wm/utima/utima1602/utima160200063/53405187-raw-chicken-breast-fillets.jpg?ver=6'
  },
  {
    ingredientId: 22,
    name: 'Onion chopped',
    photo_url: 'https://s3.envato.com/files/246703499/IMG_1752_5.jpg'
  },
  {
    ingredientId: 23,
    name: 'Tomato paste',
    photo_url:
      'http://d3e1m60ptf1oym.cloudfront.net/45bab59a-363c-11e1-ab4e-bf4c2e0bb026/PANELA_xgaplus.jpg'
  },
  {
    ingredientId: 24,
    name: 'Chilli Powder',
    photo_url:
      'https://us.123rf.com/450wm/nuttapong/nuttapong1505/nuttapong150500009/40458002-paprika-powder-isolated-on-white-background.jpg?ver=6'
  },
  {
    ingredientId: 25,
    name: 'Ground Beef',
    photo_url:
      'https://images.radio.com/kmoxam/s3fs-public/styles/nts_image_cover_tall_775x425/public/dreamstime_s_39607998.jpg?XCM.w1UGOp9sVKkWGQZe7_JIsRddxoIK&itok=3M6KcFLH&c=73fb6497175b4c1a5c79e3ede816656a'
  },
  {
    ingredientId: 26,
    name: 'Can kidney beans, rinsed and drained ',
    photo_url:
      'https://www.seriouseats.com/images/2014/04/20140414-pile-of-beans-primary-1500x1125.jpg'
  },
  {
    ingredientId: 27,
    name: 'Large Tortillas',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/NCI_flour_tortillas.jpg'
  },
  {
    ingredientId: 28,
    name: 'Firtos',
    photo_url:
      'https://previews.123rf.com/images/ksena32/ksena321510/ksena32151000090/45863494-fried-fish-on-a-white-background.jpg'
  },
  {
    ingredientId: 29,
    name: 'Shredded cheddar',
    photo_url:
      'https://image.shutterstock.com/image-photo/top-view-small-bowl-filled-260nw-284460308.jpg'
  },
  {
    ingredientId: 30,
    name: 'Lime',
    photo_url: 'https://ak8.picdn.net/shutterstock/videos/23271748/thumb/1.jpg'
  },

  {
    ingredientId: 31,
    name: 'Ground cumin',
    photo_url:
      'https://image.shutterstock.com/image-photo/pile-cumin-powder-isolated-on-260nw-1193262853.jpg'
  },
  {
    ingredientId: 32,
    name: 'Cayenne pepper',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/11461337/thumb/1.jpg'
  },
  {
    ingredientId: 33,
    name: 'Flaky white fish',
    photo_url:
      'https://image.shutterstock.com/image-photo/roach-river-fish-isolated-on-260nw-277764143.jpg'
  },
  {
    ingredientId: 34,
    name: 'Avocado',
    photo_url:
      'https://www.redwallpapers.com/public/redwallpapers-large-thumb/avocado-cut-stone-leaves-white-background-free-stock-photos-images-hd-wallpaper.jpg'
  },
  {
    ingredientId: 35,
    name: 'Red Pepper Flakes',
    photo_url:
      'https://as1.ftcdn.net/jpg/02/06/55/10/500_F_206551074_mVczUrAWOSMaw8kR48FQDQBqDw47jCtL.jpg'
  },
  {
    ingredientId: 36,
    name: 'Onions',
    photo_url: 'https://images.unsplash.com/photo-1587049276124-b933e057e698?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80'
  },
  {
    ingredientId: 37,
    name: 'Green Pepper',
    photo_url: 'https://ak9.picdn.net/shutterstock/videos/4055509/thumb/1.jpg'
  },
  {
    ingredientId: 38,
    name: 'Red Pepper',
    photo_url: 'https://ak9.picdn.net/shutterstock/videos/10314179/thumb/1.jpg'
  },
  {
    ingredientId: 39,
    name: 'Pizza dough',
    photo_url:
      'https://image.shutterstock.com/image-photo/fresh-raw-dough-pizza-bread-260nw-518950903.jpg'
  },
  {
    ingredientId: 40,
    name: 'Ketchup sauce',
    photo_url:
      'https://st2.depositphotos.com/5262887/11050/i/950/depositphotos_110501208-stock-photo-ketchup-bowl-isolated-on-white.jpg'
  },
  {
    ingredientId: 41,
    name: 'Hot Sauce',
    photo_url:
      'https://media.istockphoto.com/photos/opened-can-of-spaghetti-sauce-on-a-white-background-picture-id497704752?k=6&m=497704752&s=612x612&w=0&h=JnL54buYu1Z3fGtd8uNdjFxiAKwlxoDluD6jbIfSaZI='
  },
  {
    ingredientId: 42,
    name: 'Butter',
    photo_url: 'https://redrockstoffee.com/media/2016/11/AdobeStock_76417550.jpeg'
  },
  {
    ingredientId: 43,
    name: 'Heavy Cream',
    photo_url:
      'https://media.istockphoto.com/photos/mayonnaise-in-bowl-isolated-on-white-background-picture-id614981116?k=6&m=614981116&s=612x612&w=0&h=LtbsI2HQXOTERYuP9YJ2PJfRF3W6DcyZ798fxMcQWC0='
  },
  {
    ingredientId: 44,
    name: 'whole-milk plain yogurt',
    photo_url:
      'https://st.depositphotos.com/2757384/3317/i/950/depositphotos_33170129-stock-photo-pouring-a-glass-of-milk.jpg'
  },
  {
    ingredientId: 45,
    name: 'Chesse',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/3619997/thumb/1.jpg'
  },
  {
    ingredientId: 46,
    name: 'Mozzarella',
    photo_url:
      'https://t3.ftcdn.net/jpg/02/06/73/98/500_F_206739841_suPu6qDPHlowFqx9qo8fLqV8sNevL2g3.jpg'
  },
  {
    ingredientId: 47,
    name: 'celery stalks',
    photo_url:
      'https://cdn4.eyeem.com/thumb/6d1b3957c7caa9b73c3e0f820ef854b931808139-1538043742765/w/750'
  },
  {
    ingredientId: 48,
    name: 'Parmesan Chesse',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/3721877/thumb/1.jpg'
  },
  {
    ingredientId: 49,
    name: 'pancetta',
    photo_url:
      'https://previews.123rf.com/images/onlyfabrizio/onlyfabrizio1606/onlyfabrizio160600002/60198502-raw-stripes-of-pancetta-stesa-on-a-white-background.jpg'
  },
  {
    ingredientId: 50,
    name: 'Spaghetti',
    photo_url:
      'https://previews.123rf.com/images/mfron/mfron1204/mfron120400098/13306773-bunch-of-spaghetti-nudeln-isoliert-auf-wei%C3%9Fem-hintergrund.jpg'
  },
  {
    ingredientId: 51,
    name: 'Garlic',
    photo_url: 'https://image.freepik.com/free-photo/fresh-garlic-white-background_1339-17012.jpg'
  },
  {
    ingredientId: 52,
    name: 'Lasagna noodles',
    photo_url:
      'https://previews.123rf.com/images/velkol/velkol1110/velkol111000004/11083085-an-image-of-raw-lasagna-on-white-background.jpg'
  },
  {
    ingredientId: 53,
    name: 'Italian sauce',
    photo_url:
      'https://previews.123rf.com/images/arinahabich/arinahabich1504/arinahabich150400858/38827029-raw-italian-sausage-on-a-white-background-.jpg'
  },
  {
    ingredientId: 54,
    name: 'Crushed Tomatoes',
    photo_url:
      'https://previews.123rf.com/images/merkulovnik/merkulovnik1406/merkulovnik140600100/28751626-crushed-tomato-isolated-on-white-background.jpg'
  },
  {
    ingredientId: 55,
    name: 'Sugar',
    photo_url:
      'https://previews.123rf.com/images/sommai/sommai1411/sommai141100034/33199985-sugar-cubes-in-a-bowl-isolated-on-white-background.jpg'
  },
  {
    ingredientId: 56,
    name: 'minced fresh parsley',
    photo_url:
      'https://t4.ftcdn.net/jpg/02/15/78/05/240_F_215780551_Eid0xpP1M2fokvuEcvJj8uqhROLJkb3p.jpg'
  },
  {
    ingredientId: 57,
    name: 'ricotta cheese',
    photo_url:
      'https://previews.123rf.com/images/barkstudio/barkstudio1608/barkstudio160800351/61418602-ricotta-cheese-into-a-bowl-in-white-background.jpg'
  },
  {
    ingredientId: 58,
    name: ' fennel seed',
    photo_url:
      'https://previews.123rf.com/images/pinkomelet/pinkomelet1710/pinkomelet171000227/88851299-close-up-the-fennel-seed-on-white-background.jpg'
  },
  {
    ingredientId: 59,
    name: 'Banana',
    photo_url:
      'https://www.conservationmagazine.org/wp-content/uploads/2013/04/sterile-banana.jpg'
  },
  {
    ingredientId: 60,
    name: 'Frozen Straberries',
    photo_url:
      'https://www.cascadianfarm.com/wp-content/uploads/2018/12/Strawberries_Main_0218.png'
  },
  {
    ingredientId: 61,
    name: 'Greek Yogurt',
    photo_url:
      'http://images.media-allrecipes.com/userphotos/960x960/3758635.jpg'
  },
];
