import React, {useState} from 'react';
import clsx from 'clsx';
import useStyles from '../Dashboard/DashboardStyles.js';
import { ListItem, Dialog, CssBaseline, Drawer, Box, AppBar, Toolbar, List, Typography, Divider, IconButton, Badge, Container, Grid, Paper, Link, Button, TextField, DialogTitle} from '@material-ui/core';
import { MenuOutlined, ChevronLeft } from '@material-ui/icons';
import GlistItems from '../Dashboard/ListItems/listItems';
import InvestmentsG from '../Dashboard/InvestmentsG/InvestmentsG'
import PGraph from './PGraph/PGraph';


export default function Portfolio() {
  const classes = useStyles();
  const [extend, setExtend] = React.useState(true);
  const handleDrawerExtend = () => {
    setExtend(true);
  };
  const handleDrawerShrink = () => {
    setExtend(false);
  };
  //combination of both styles
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [portfolio, setPortfolio] = useState({
    investments: [
      { id: 1, description: 'TSLA', category: 'stocks', amount: 20000, yield: 35 },
      { id: 2, description: 'Litecoin', category: 'crypto', amount: 19000,  yield: 40 },
      { id: 3, description: 'Oranges', category: 'fruit :v', amount: 16000,  yield: 5},
      { id: 4, description: 'VOO', category: 'ETFs', amount: 25000,  yield: 10 },
    ]
  })

  const [params, setParams] = useState({
    investments: portfolio.investments,
    modUpdate: false,
    modInsert: false,
    form: {
      id:'3',
      description: '',
      category: '',
      amount: '',
      yield: '',
    },
  });

  const showUpdate = (dato) =>{
    setParams({...params,
      form: dato,
      modUpdate: true,
    });
  };

  const closeUpdate = () => {
    setParams({...params,
      modUpdate: false,
    });
  };

  const showInsert = () => {
    setParams({...params,
      modInsert: true,
    });
  };

  const closeInsert = () => {
    setParams({...params,
      modInsert: false,
    });
  };

  const edit = (dato) => {
    var counter = 0;
    var array = params.investments;
    array.map((conjunto) => {
      if(dato.id === conjunto.id){
        array[counter].description = dato.description;
        array[counter].category = dato.category;
        array[counter].amount = dato.amount;
        array[counter].yield = dato.yield;
      }
      counter++;
    });
    setParams({...params, investments: array, modUpdate: false});
  };

  const deleteinfo = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+ dato.id);
    if (opcion === true) {
      var counter = 0;
      var array = params.investments;
      array.map((conjunto) => {
        if (dato.id === conjunto.id) {
          array.splice(counter, 1);
        }
        counter++;
      });
      setParams({...params, investments: array, modUpdate: false });
    }
  };

  const insertinfo= ()=>{
    var newVal= {...params.form};
    newVal.id=params.investments.length+1;
    var lista= params.investments;
    lista.push(newVal);
    setParams({...params, modInsert: false, investments: lista });
  }

  const handleChange = (e) => {
    e.preventDefault();
    setParams({
      ...params,
      form: {
        ...params.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, extend && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerExtend}
            className={clsx(classes.menuButton, extend && classes.menuButtonHidden)}
          >
            <MenuOutlined />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Portfolio
              </Typography>
          <IconButton color="inherit">
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !extend && classes.drawerPaperClose),
        }}
        extend={extend}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerShrink}>
            <ChevronLeft />
          </IconButton>
        </div>
        <Divider />
        <List><GlistItems/></List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={8}>
              <Paper className={fixedHeightPaper}>
                <PGraph />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
                <InvestmentsG />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={fixedHeightPaper}>
                <table id='Portfolio'>
                  <thead>
                    <tr>
                      <td>Description</td>
                      <td>Category</td>
                      <td>Amount</td>
                      <td>Yield</td>
                    </tr>
                  </thead>
                  <tbody>
                    {portfolio.investments.map((element) => (
                      <tr>
                        <td>{element.description}</td>
                        <td>{element.category}</td>
                        <td>{element.amount}</td>
                        <td>{element.yield}</td>
                        <td>
                          <Button 
                          color = 'primary'
                          onClick = {() => showUpdate(element)}
                          > Editar</Button>
                          <Button 
                          color = 'danger'
                          onClick = {() => deleteinfo(element)}
                          > Delete</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

              </Paper>
            </Grid>
            <Grid container item xs={12} md={6} lg={6} spacing={1}>
                <Grid item xs = {6}>
                  <Button
                  fullWidth
                  variant='contained'
                  color= 'secondary'
                  onClick = {()=>showInsert()}
                  >
                    Add Investment
                  </Button>
                </Grid>
            </Grid>
          </Grid>
          <Dialog open={params.modUpdate}>
          <DialogTitle>
           <div><h3>Editar Inversion</h3></div>
          </DialogTitle>

          <List>
            <ListItem>
              <label>
               Id:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={params.form.id}
              />
            </ListItem>
            
            <ListItem>
              <label>
                Description:
              </label>
              <input
                className="form-control"
                name="description"
                type="text"
                onChange={handleChange}
                value={params.form.description}
              />
            </ListItem>
            
            <ListItem>
              <label>
                Category: 
              </label>
              <input
                className="form-control"
                name="category"
                type="text"
                onChange={handleChange}
                value={params.form.category}
              />
            </ListItem>

            <ListItem>
              <label>
                Amount: 
              </label>
              <input
                className="form-control"
                name="amount"
                type="text"
                onChange={handleChange}
                value={params.form.amount}
              />
            </ListItem>

            <ListItem>
              <label>
                Yield: 
              </label>
              <input
                className="form-control"
                name="yield"
                type="text"
                onChange={handleChange}
                value={params.form.yield}
              />
            </ListItem>
          </List>

          <Grid>
            <Button
              color="primary"
              onClick={() => edit(params.form)}
            >
              Edit
            </Button>
            <Button
              color="danger"
              onClick={() => closeUpdate()}
            >
              Cancelar
            </Button>
          </Grid>
        </Dialog>



        <Dialog open={params.modInsert}>
          <DialogTitle>
           <div><h3>Insertar Inversion</h3></div>
          </DialogTitle>

          <List>
            <ListItem>
              <label>
                Id: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                value={params.investments.length + 1}
              />
            </ListItem>
            
            <ListItem>
              <label>
                Description: 
              </label>
              <input
                className="form-control"
                name="description"
                type="text"
                onChange={handleChange}
              />
            </ListItem>
            
            <ListItem>
              <label>
                Category: 
              </label>
              <input
                className="form-control"
                name="category"
                type="text"
                onChange={handleChange}
              />
            </ListItem>

            <ListItem>
              <label>
                Amount: 
              </label>
              <input
                className="form-control"
                name="amount"
                type="text"
                onChange={handleChange}
              />
            </ListItem>

            <ListItem>
              <label>
                Yield: 
              </label>
              <input
                className="form-control"
                name="yield"
                type="text"
                onChange={handleChange}
              />
            </ListItem>
          </List>

          <Grid>
            <Button
              color="primary"
              onClick={() => insertinfo()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => closeInsert()}
            >
              Cancelar
            </Button>
          </Grid>
        </Dialog>
          <Box pt={4}>
          </Box>
        </Container>
      </main>
    </div>
  );
}