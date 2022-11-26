import React, { Component } from "react";
import { FCRecipe } from "./FCRecipe";
import { Row, Col, Container } from "react-bootstrap";
import "../App.css";

export function FCRecipes({ recipes, btnText, recipesRend }) {
  const recipesHTML = recipes.map((recipe) => (
    <FCRecipe
      recipe={recipe}
      btnText={btnText}
      recipesRend={recipesRend}
      key={recipe.id}
    />
  ));

  const noRecipesFoundHTML = <h3>Sorry no recipes have been found!</h3>;

  return (
    <>
      <h1>Recipes</h1>
      {!recipes.length && noRecipesFoundHTML}
      <Container>
        <Row style={{ display: "inline-flex" }}>
          <Col className="recipes" style={{ display: "inline-flex"}}>
            {!!recipes.length && recipesHTML}
          </Col>
        </Row>
      </Container>
    </>
  );
}
