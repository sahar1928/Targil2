import React, { Component } from "react";
import { FCRecipes } from "../Functional Comps/FCRecipes";
import { FCRecipesDone } from "../Functional Comps/FCRecipesDone";

const recipes = [
  {
    name: "Sheet Pan Olive Bar Chicken",
    description: "Full of rich flavors, almost NO prep, and using only one pan, this dish is destined to become a new favorite.",
    image: "https://images.themodernproper.com/billowy-turkey/production/posts/2018/Olive-Bar-Sheet-pan-Chicken-16.jpg?w=667&auto=compress%2Cformat&fit=crop&dm=1619983841&s=3be3219e02db13d32adddc5b429b19ab",
    id: 1,
  },
  {
    name: "Mango Chutney Chicken Sheet Pan",
    description: "A jar of store-bought mango chutney is the secret to this ultra easy dinner.",
    image: "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Mango-Chutney-Sheet-Pan-Chicken-with-Cauliflower-8.jpg?w=1200&auto=compress%2Cformat&fit=crop&dm=1599769270&s=589351926d5af6ccd3305803625744be",
    id: 2,
  },
  {
    name: "Taco Soup",
    description: "Like tacos, but soup! Seriously!",
    image: "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Taco-Soup-10.jpg?w=1200&auto=compress%2Cformat&fit=crop&dm=1599769465&s=b747a3fb168e8afae2e1bb90180bff67",
    id: 3,
  },
];

export default class CCMyKitchen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: recipes,
      rdyRecipes: [],
      counter: 0,
    };
  }

  Recipes = (recipe) => {
    let unrdyRecipes = [...this.state.recipes];
    unrdyRecipes = unrdyRecipes.filter((value) => value.name !== recipe.name);
    this.setState({
      recipes: [...unrdyRecipes],
    });
    let rdy = [...this.state.rdyRecipes, recipe];
    this.setState({
      rdyRecipes: [...rdy],
      counter: this.state.counter + 1,
    });
  };

  readyRecipes = (recipe) => {
    const rdy = [...this.state.rdyRecipes].filter(
      (value) => value.name !== recipe.name
    );

    this.setState({
      rdyRecipes: [...rdy],
      counter: this.state.counter - 1,
    });
    const unrdyRecipes = [...this.state.recipes, recipe];
    this.setState({
      recipes: [...unrdyRecipes],
    });
  };

  render() {
    return (
      <>
        <FCRecipes
          btnText="Prepare dish!"
          recipesRend={this.Recipes}
          recipes={this.state.recipes}
        />
        <FCRecipesDone
          btnText="Ready to eat!"
          recipesRend={this.readyRecipes}
          counter={this.state.counter}
          recipes={this.state.rdyRecipes}
        />
      </>
    );
  }
}
