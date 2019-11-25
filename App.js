import React from 'react';
//import logo from './logo.svg';
import './App.scss';



function App() {
  return (
    <div className="frameContainer">

      <div className="mainHeaderContainer">

                <div className="leftBlock"  /*  FLOATING BLOCK INSIDE MAINHEADERCONTAINER  */ >

                      <div className="mainLogoAndSearchContainer"   /*  CONTAINS LOGO AND SEARCH ICON   */>
                            <div className="mainLogo"></div>
                            <div className="mainSearchIcon"></div>
                      </div   /*  END LEFTBLOCK  */>

                          <div className="headerTitle">A new way to shop safely</div>
                          <div className="headerBodyText">
                                  <span class="web-text">We're a service that's supported on blockchain by the crypocurrency EOS, so you can be sure that our sellers are trusted and verified.</span>
                                  <span class="app-text">Be sure that your purchase is verified and secure on blockchain with the crypocurrency EOS.</span>
                          </div>

                          <div class="headerSearch">

                                  <div class="searchBox">
                                            <span class="icon"><i class="fa fa-search"></i></span>
                                            <input type="search" id="search" placeholder="Search" />
                                  </div  /*  END SEARCHBOX  */   >

                          </div  /*  END HEADERSEARCH  */  >

                </div /* END LEFTBLOCK */>

      </div /* END MAINHEADERCONTAINER */>








      <div className="midBlock"  /*   THE MIDBLOCK SECTION 1  */   >

              <div className="floatBoxContainer"  /*  BEGINING OF 1ST MIDBLOCK ELEMENT   */   >


                        <div className="floatBoxDiscription" /*  MIDBLOCK AREA WITH DESCRIPTION  */>

                                <div className="midTextHeader">Most popular</div  /* END MIDTEXTHEADER */>
                                <div className="midTextBody">We know you'll love these.</div  /* END MIDTEXTHEADER */>

                                <div className="leftRightContainer">
                                          <div className="leftButton"></div  /* END LEFTBUTTON */>
                                          <div className="rightButton"></div  /* END RIGHTBUTTON */>
                                </div  /* END LEFTRIGHTCONTAINER */>

                              <div className="callToAction">Shop Now</div  /* END B_CALLTOACTION */>

                        </div /* END FLOATBOXDESCRIPTION */>



                        <span class="hideSmall"  /*  CODE TO HID THIS DIV IF APP SIZE  */>
                        <div className="floatBoxDisplayContainer">
                                  <div className="floatBoxDisplayIMG-3"></div  /* END D_FLOATBOXDISPLAYIMG */>
                                  <div className="floatBoxTitleText">Circle Chair</div  /* END D_FLOATBOXTITLETEXT */>

                                  <div className="floatDisplayBox" /* FIRST DISPLAY BOX */ >
                                          <div className="starSelected"></div/* END starSelected */>
                                          <div className="starSelected"></div/* END starSelected */>
                                          <div className="starSelected"></div/* END starSelected */>
                                          <div className="starSelected"></div/* END starSelected */>
                                          <div className="starUnselected"></div/* END starUnselected */>

                                  </div  /* END D_FLOATDISPLAYBOX */>
                                <div className="floatSmallBox">$200.99</div  /* END MIDTEXTHEADER */>

                        </div  /* END D_FLOATBOXDISPLAYCONTAINER */>
                        </span>





                        <div className="floatBoxDisplayContainer">
                                  <div className="floatBoxDisplayIMG-2"></div  /* END D_FLOATBOXDISPLAYIMG */>
                                  <div className="floatBoxTitleText">XAC Modern Lamp</div  /* END D_FLOATBOXTITLETEXT */>

                                  <div className="floatDisplayBox" /* FIRST DISPLAY BOX */ >
                                          <div className="starSelected"></div/* END starSelected */>
                                          <div className="starSelected"></div/* END starSelected */>
                                          <div className="starSelected"></div/* END starSelected */>
                                          <div className="starSelected"></div/* END starSelected */>
                                          <div className="starUnselected"></div/* END starUnselected */>

                                  </div  /* END D_FLOATDISPLAYBOX */>
                                <div className="floatSmallBox">$50.99</div  /* END MIDTEXTHEADER */>

                        </div  /* END D_FLOATBOXDISPLAYCONTAINER */>



                        <div className="floatBoxDisplayContainer">
                                  <div className="floatBoxDisplayIMG-1"></div  /* END D_FLOATBOXDISPLAYIMG */>
                                  <div className="floatBoxTitleText">Hat Chair</div  /* END D_FLOATBOXTITLETEXT */>

                                  <div className="floatDisplayBox" /* FIRST DISPLAY BOX */ >
                                          <div className="starSelected"></div/* END starSelected */>
                                          <div className="starSelected"></div/* END starSelected */>
                                          <div className="starSelected"></div/* END starSelected */>
                                          <div className="starSelected"></div/* END starSelected */>
                                          <div className="starUnselected"></div/* END starUnselected */>

                                  </div  /* END D_FLOATDISPLAYBOX */>
                                <div className="floatSmallBox">$155.99</div  /* END MIDTEXTHEADER */>

                        </div  /* END D_FLOATBOXDISPLAYCONTAINER */>


              </div /* END FLOATBOXCONTAINER */>

      </div /* END MIDBLOCK SECTION 1 */>

      <div className="midBlock"  /* BEGIN SECTION FOR 3 LARGE IMAGES  */>
          <div className="largeDisplayContainer">

                      <div className="largeDisplayBox-3">
                                <div className="largeDisplayText">Minimal</div /* END LARGEDISPLAYTEXT */>
                      </div/* END LARGEDISPLAYBOX */>
                    <div className="largeDisplayBox-2">
                                <div className="largeDisplayText">New Rustic</div /* END LARGEDISPLAYTEXT */>
                      </div/* END LARGEDISPLAYBOX */>

                    <div className="largeDisplayBox-1">
                                <div className="largeDisplayText">Modern</div /* END LARGEDISPLAYTEXT */>
                      </div/* END LARGEDISPLAYBOX */>

                </div>

      </div /* END MIDBLOCK FOR 3 LARGE IMAGES */>


                <div className="footerContainerBox" /*  BLACH  */>

                      <div className="footerIdentifyContainer">

                                  <div className="mainLogoFooter"></div>
                                  <div className="footerCopyright"><p>Copyright Block Shop 2019</p> <p>All Rights Reserved</p></div>

                      </div   /* END FOOTERIDENTIFYCONTAINER  */>

                      <div className="footerBlock">

                            <div className="footerTitle">Follow Us</div>
                            <div className="socialMediaIconsContainer">

                                    <div className="socialMediaBox">
                                        <a href="#"><img className="socialMediaIcons-Facebook" /></a>
                                    </div   /* END SOCIAL MEDIA BOX FACEBOOK  */>

                                    <div className="socialMediaBox">
                                        <a href="#"><img className="socialMediaIcons-Twitter" /></a>
                                    </div   /* END SOCIAL MEDIA BOX FACEBOOK  */>

                                    <div className="socialMediaBox">
                                        <a href="#"><img className="socialMediaIcons-Instagram" /></a>
                                    </div   /* END SOCIAL MEDIA BOX FACEBOOK  */>

                                    <div className="socialMediaBox">
                                        <a href="#"><img className="socialMediaIcons-Pintrest" /></a>
                                    </div   /* END SOCIAL MEDIA BOX FACEBOOK  */>


                            </div   /*  END SOCIALMEDIAICONSCONTAINER  */ >

                      </div  /*END FOOTERBLOCK SOCIAL MEDIA  */>


                      <div className="footerBlock">

                            <div className="footerTitle">Customer Care</div>
                            <div className="footerLink">FAQ</div>
                            <div className="footerLink">Warranty</div>
                            <div className="footerLink">Returns</div>

                      </div  /*END FOOTERBLOCK 2  */>

                      <div className="footerBlock">

                            <div className="footerTitle">About Us</div>
                            <div className="footerLink">Story</div>
                            <div className="footerLink">Contact</div>
                            <div className="footerLink">Blog</div>

                      </div  /*END FOOTERBLOCK 1  */>



                </div /*  END FOOTERCONTAINERBOX */>


    </div /* END FRAMEBOX */>

  );
}


export default App;
