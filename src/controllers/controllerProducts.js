let productos = [
  
]

export const view = async (req,res)=>{
  
    res.status(200).render('products',{listadoProductos:productos})
  }

export const create = async (req,res)=>{
  let product = req.body
  productos.id = Math.floor(Math.random()*10000)
  productos.push(req.body) 
  console.log(productos)
   res.status(200).redirect('/productos')
 }

 
 export const del = (req,res) =>{
  console.log(req.body)
  productos = productos.filter(element => element.id != req.body.id)
  res.status(200).redirect('/productos')

}

export const update = (req,res) =>{
    
  let product = products.find(element => element.id == req.body.id)
  if(req.body.nombre)  product.nombre = req.body.nombre
  if(req.body.precio) product.precio=req.body.precio
  if(req.body.stock) product.stock = req.body.stock
  res.status(200).redirect('/productos')
  
}