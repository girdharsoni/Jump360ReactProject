import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AdminHome from '../Components/Home/AdminHome';
import View from '../Components/View_Edit/view'
import Edit from '../Components/View_Edit/edit';
import Add from '../Components/AddRestorent/AddRestorent'
import EndUser from '../Components/EndUser/EndUserRestorentView'
const Routes = (props) => {
    return(
        <div>
            <Switch>
                <Route path='/' exact component={AdminHome} />
                <Route path='/View_Edit/view' exact component={View} />
                <Route path='/View_Edit/edit' exact component={Edit} />
                <Route path='/AddRestorent/AddRestorent' exact component={Add} />
                <Route path='/EndUser/EndUserRestorentView' exact component={EndUser} />
                <Redirect to="/" />
            </Switch>
        </div>
    )
}

export default Routes;