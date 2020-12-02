import React, {useState} from 'react';
import clsx from 'clsx';
import useStyles from '../Dashboard/DashboardStyles.js';
import { ListItem, Dialog, CssBaseline, Drawer, Box, AppBar, Toolbar, List, Typography, Divider, IconButton, Badge, Container, Grid, Paper, Link, Button, TextField, DialogTitle} from '@material-ui/core';
import { MenuOutlined, ChevronLeft } from '@material-ui/icons';
import GlistItems from '../Dashboard/ListItems/listItems';
import InvestmentsG from '../Dashboard/InvestmentsG/InvestmentsG'
import BGraph from './BGraph/BGraph'
import Title from '../Dashboard/InvestmentsG/Title.js';


export default function Budget() {
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

  const [formState, setFormState] = useState(0);
  const [movement, setMovement] = useState({
    expense: [
      { id: 1, description: 'Netflix', category: 'Entretainment', amount: 170, date: '10/07/2020' },
      { id: 2, description: 'Drinks', category: 'Friends', amount: 300,  date: '03/08/2020' },
    ],
    income: [
      { id: 1, description: 'Full Time Job', category: 'Job', amount: 20000, date: '10/03/2020' },
      { id: 2, description: 'Book', category: 'Pasive', amount: 4000,  date: '24/08/2020' },
    ]
  })

  const [params, setParams] = useState({
    income: movement.income,
    expense: movement.expense,
    modUpdate: false,
    modInsert: false,
    form: {
      id:'3',
      description: '',
      category: '',
      amount: '',
      date: '',
    }
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
    if(formState == 1){
    var array = params.income;
    } else {
      var array = params.expense;
    }
    array.map((conjunto) => {
      if(dato.id === conjunto.id){
        array[counter].description = dato.description;
        array[counter].category = dato.category;
        array[counter].amount = dato.amount;
        array[counter].date = dato.date;
      }
      counter++;
    });
    if(formState == 1){
    setParams({...params, income: array, modUpdate: false});
    } else {
      setParams({...params, expense: array, modUpdate: false});
    }
  };

  const deleteinfo = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+ dato.id);
    if (opcion === true) {
      var counter = 0;
      var array = params.income;
      array.map((conjunto) => {
        if (dato.id === conjunto.id) {
          array.splice(counter, 1);
        }
        counter++;
      });
      setParams({...params, income: array, modUpdate: false });
    }
  };



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
                <BGraph />
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
            <Grid item xs={12} md={6} lg={6} container>
                <Grid item xs = {6}>
                  <Title>Expense</Title>
                </Grid>
                <Grid item xs = {6}>
                  <Button
                  fullWidth
                  variant='contained'
                  color= 'secondary'
                  onClick = {()=> {
                    //0 means expense, 1 means income
                    setFormState(0);
                    showInsert()}}
                  >
                    Add Expense
                  </Button>
                </Grid>
                <Grid item xs = {12}>
                  <Paper className={fixedHeightPaper}>
                    <table id='Portfolio'>
                      <thead>
                        <tr>
                          <td>Description</td>
                          <td>Category</td>
                          <td>Amount</td>
                          <td>Date</td>
                        </tr>
                      </thead>
                      <tbody>
                        {movement.expense.map((element) => (
                          <tr>
                            <td>{element.description}</td>
                            <td>{element.category}</td>
                            <td>{element.amount}</td>
                            <td>{element.date}</td>
                            <td>
                              <Button 
                              color = 'primary'
                              onClick = {()=> {
                                //0 means expense, 1 means income
                                setFormState(0);
                                showUpdate(element)}}
                              > Edit</Button>
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
            </Grid>
            <Grid item xs={12} md={6} lg={6} container>
              <Grid item xs = {6}>
                <Title>Income</Title>
              </Grid>
              <Grid item xs = {6}>
                  <Button
                  fullWidth
                  variant='contained'
                  color= 'secondary'
                  onClick = {()=> {
                    //0 means expense, 1 means income
                    setFormState(1);
                    showInsert()}}
                  >
                    Add Income
                  </Button>
              </Grid>
              <Grid item xs = {12}>
                  <Paper className={fixedHeightPaper}>
                    <table id='Portfolio'>
                      <thead>
                        <tr>
                          <td>Description</td>
                          <td>Category</td>
                          <td>Amount</td>
                          <td>Date</td>
                        </tr>
                      </thead>
                      <tbody>
                        {movement.income.map((element) => (
                          <tr>
                            <td>{element.description}</td>
                            <td>{element.category}</td>
                            <td>{element.amount}</td>
                            <td>{element.date}</td>
                            <td>
                              <Button 
                              color = 'primary'
                              onClick = {()=> {
                                //0 means expense, 1 means income
                                setFormState(1);
                                showUpdate(element)}}
                              > Edit</Button>
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
            </Grid>
            <Grid container item xs={12} md={6} lg={6} spacing={1}>
                
            </Grid>
          </Grid>
          <Dialog open={params.modUpdate}>
          <DialogTitle>
           <div><h3>{
                //0 means expense, 1 means income
                formState === 1?'Edit Income':'Edit Expense'}</h3></div>
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
                Date: 
              </label>
              <input
                className="form-control"
                name="date"
                type="text"
                onChange={handleChange}
                value={params.form.date}
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
           <div><h3>{
                //0 means expense, 1 means income
                formState === 1?'Add Income':'Add Expense'}</h3></div>
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
                value={params.income.length + 1}
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
                Date: 
              </label>
              <input
                className="form-control"
                name="date"
                type="text"
                onChange={handleChange}
              />
            </ListItem>
          </List>

          <Grid>
            <Button
              color="primary"
              onClick={() => {
                //0 means expense, 1 means income
                formState === 1?insertinfo(params.form, params, setParams, formState):
                insertinfo(params.form, params, setParams, formState)}}
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


  const insertinfo= (form, params, setParams, state)=>{
    var newVal= {...form};
    if(state == 1){
    newVal.id=params.income.length+1;
    var lista= params.income;
    lista.push(newVal);
    setParams({...params, modInsert: false, income: lista });
    } else {
    newVal.id=params.expense.length+1;
    var lista2= params.expense;
    lista2.push(newVal);
    setParams({...params, modInsert: false, expense: lista2 });

    }

  }