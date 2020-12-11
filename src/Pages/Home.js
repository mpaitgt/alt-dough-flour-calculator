import React from 'react';
import Container from '../Components/Container';
import Header from '../Components/Header';
import Ingredients from '../Components/Ingredients';
import Footer from '../Components/Footer';
import flours from '../flours.json';
import Menu from '../Components/Menu';

class Home extends React.Component {
  state = {
    menuVisible: true,
    input: 140,
    blend: flours.flours[0]
  };

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState(prevState => ({
  //       menuVisible: !prevState.menuVisible
  //     }))
  //   }, 2000);
  // }

  handleChange = (e) => {
    const {value} = e.target;
    this.setState(() => ({
      input: value
    }))
  }

  clickToConvert = (inGrams) => {
    this.setState(() => ({
      input: inGrams
    }))
  }

  selectBlend = e => {
    const { textContent } = e.target;
    this.setState(() => ({
      blend: flours.flours.find(blend => blend.recipe === textContent)
    }))
  }

  handleMenuVisibility = () => {
    this.setState(prevState => ({
      menuVisible: !prevState.menuVisible
    }))
  }

  render() {
    const {menuVisible, input, blend} = this.state;
    return (
      <div>
        <Container menuVisible={menuVisible}>
          <Header 
            input={input} 
            setInput={this.handleChange} 
            handleMenuToggle={this.handleMenuVisibility} 
            menuVisible={menuVisible}
          />
          <Ingredients 
            blend={blend} 
            input={input} 
          />
          <Footer />
          <Menu 
            flours={flours} 
            stateBlend={this.state.blend} 
            selectBlend={this.selectBlend} 
            menuVisible={menuVisible} 
            clickToConvert={this.clickToConvert}
          />
        </Container>
        
      </div>
    )
  }
}

export default Home;