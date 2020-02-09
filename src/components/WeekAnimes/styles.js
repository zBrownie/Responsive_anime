import styled from 'styled-components';

export const Container = styled.div `
    margin: 60px 0;
    ul{
        display:flex;
        flex-direction:row;
        list-style:none;
        justify-content:center;
        
    }

    li{
        width:400px;
        border-left: 1px solid rgba(0, 0, 0, 0.08);
        margin: 0 4px;
    }

    li header{
        font-size:16px;
        font-weight:bold;
    }

   li img{
       width:120px;
       margin-top:10px;
       box-shadow: 2px 4px 4px 0 rgba(0, 0, 0, 0.5)
   }

   @media(max-width:790px){
       ul {
           display:grid;
           grid-template-columns: 1fr 1fr;
           justify-content:center;
           align-items:center;
           
       }

       li{
           display:flex;
           flex-direction:column;
           width:300px;
           border-left: 0;
       }

       
   }

   @media(max-width:550px){
       ul {
           display:grid;
           grid-template-columns: 1fr;
           margin-left: 20px;
       }
       li{
        border-left: 0;
       }
       li header{
           margin: 10px 0;
       }

   }


`;