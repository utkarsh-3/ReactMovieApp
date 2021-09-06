const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router("C:/Users/Utkarsh.Kendre/Desktop/Training/ReactDemo/my-app/src/server/db.json");
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.jsonp(req.query)
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})

router.render = (req, res) => {
    res.jsonp({
      body: res.locals.data
    })
  }

server.post("/movies", function(req,res,next){
    let error = checkPlace(req.body);
    if(error){
        res.status(400).send(error);
    }
    else{
        //generate the slug for title
        req.body.slug = generateurlslug(req.body.title);
        next();
    }
})
function generateurlslug(){
    return value;
}
function checkMovie(place){
    if(!movie.Title)
        return "Please enter title";
    return "";
}
// Use default router
server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running at port 3001')
})