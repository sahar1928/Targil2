import React, { Component } from "react";
import { FCRecipe } from "./FCRecipe";
import { Row, Col, Container } from "react-bootstrap";
import "../App.css";

export function FCRecipesDone({ recipes, btnText, recipesRend, counter }) {
  let recipesHTML =
    !!recipes.length &&
    recipes.map((recipe) => (
      <FCRecipe
        recipe={recipe}
        btnText={btnText}
        recipesRend={recipesRend}
        key={recipe.id}
      />
    ));

  const noReadyMealsFoundHTML = <h3>Sorry no ready meals have been found!</h3>;

  return (
    <>
      <h1>Ready Meals</h1>
      {!!counter != 0 && <h3>Recipes made: {counter}</h3>}
      {!recipes.length && noReadyMealsFoundHTML}
      <Container>
        <Row>
          <Col className="recipesDone" style={{ display: "inline-flex" }}>
            {recipesHTML}
          </Col>
        </Row>
      </Container>
    </>
  );
}
