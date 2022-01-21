import React, { Component } from "react";
import axios from "axios";
import Main from "../template/Main";
import Search from "../template/Search";
import Container from "react-bootstrap/esm/Container";
import Table from "../template/Table";




export default class PecasCrud extends Component {


  Bpesq(props) {
      return(
        
      <Main>
          
            <div>
                <Container className="col-md-4">
                    <Search />
                </Container>
            </div>
        </Main>
     
      )
    }

    renderTable() {
        return (
            <div>
                <Container>
                    <Table />
                </Container>
            </div>
        )
    }

 
}