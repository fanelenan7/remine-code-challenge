### Remine Front End Interview Test

1. Obtain the list of locations from [front-end-interview-test-api](https://github.com/remineapp/front-end-interview-test-api/blob/master/README.md) using included `API.js`
2. Populate the `RemineTable` component inside of `CHANGEME.js` with the locations obtained above.
3. Build out the `CHANGEME.js` view to allow a user to filter the `RemineTable` contents based on whether the location has:
    * a number of beds in a user specified range
    * a number of baths in a user specified range
    * the same building type as the one specified by the user

    If a user has not specified a bound in a range or a type for the building type, default to show all.  If no filters are active or being
    applied, all locations should be shown in the `RemineTable`.

```
@                                                                                                                                                              







                                                                         .,,,**,,,.                                                                            
                                                                  ,********************                                                                        
                                                             .*****************************,                                                                   
                                                           ************************************,                                                               
                                                         ***************///((((////***************,                                                            
                                                       *********//***********************************.                                                         
                                                      **************************************************.                                                      
                                                    .*************///***************////////////////*****/.                                                    
                                                   **********/(************************************************,                                               
                                                  ****/*/*********************************************************.                                            
                                                ,****/*/*********/((/******//((/*************************//(((((((((                                           
                                               *******/******(******************************//////*********************,                                       
                                             .******(*/***//********/(((((((((((((#(/*********************//((((((((//*.                                       
                                            *******/*//***/***((**************************////////********************.                                        
                                           *******(***/*************(........,(/**********************/(*.....,(/******                                        
                                          ****//*******/*********(...............,(****************(*.............*****.                                       
                                         ,**/**/(**************(..................../************(..................(**,                                       
                                         ****//******/********(......................,/*********,....................***                                       
                                        ***********************........................*******/......................(**,                                      
                                       .**********************.............*@%.........(******/.............#@.......,/**                                      
                                       ***********************........................./******(.......................(**,                                     
                                       ***********************.........................(******/,....................../***                                     
                                      .***********/***********/.......................,********/.....................*****                                     
                                      .***********/***********/......................,/****/****/..................../****                                     
                                      ,************************/....................,*******(****(..................(*****                                     
                                      ,*****/******/*************/.................(*********#******............../*******                                     
                                      ,*******//***/***************/(,..........*(*******************/(/**//(*//**********.                                    
                                      .***//**/*****/*****************************************(***************************,                                    
                                       **/***********/*****************************************(**************************,                                    
                                       /******/*******//***************************************/**************************,                                    
                                       ********/********//**************************************/*************************,                                    
                                       ****/****************//**********************************(*************************,                                    
                                        ******//***********************************************//*************************.                                    
                                        ,*******(*************************************////********************************                                     
                                        .********//***********************************************************************                                     
                                         *********/***********************************************************************                                     
                                          *****************************/*************************************************,                                     
                                          .*************************/*********************************************/******.                                     
                                            **********************/***************//((((///***************/((/******/***,                                      
                                            .********************/*******/#(****************************************/***                                       
                                              *******************/*************************************************/***                                        
                                               ,*******************/********************************************///***                                         
                                                 ********************************************************************                                          
                                                  .****************************************************************,                                           
                                                   .***************************************************************                                            
                                                     *************************************************************.                                            
                                                      ************************************************************                                             
                                                       **********************************************************,                                             
                                                       .*********************************************************.                                             
                                                        .********************************************************                                              
                                                          ******************************************************,                                              
                                                          .*****************************************************.                                              
                                                            ****************************************************                                               
                                                             ***************************************************                                               
                                                              **************************************************                                               
                                                               ************************************************,                                               
                                                                ***********************************************,                                               
                                                                 ,*********************************************                                                
                                                                   ********************************************                                                
                                                                     *****************************************.                                                
                                                                       **************************************,                                                 
                                                                         ,*********************************,                                                   
                                                                            .****************************                                                      
                                                                                 .,******************.                                                         
                                                                                           ..,,,.                                                              






```
