const app = express();

app.use(express.static(__dirname+'/dist/traduccion-galeradas'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/traduccion-galeradas/index.html'));
});

app.listen(process.env.PORT || 8080);