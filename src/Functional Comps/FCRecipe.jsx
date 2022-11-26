import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export function FCRecipe({ recipe, btnText, recipesRend }) {
  return (
      <Card  style={{ margin: "5%", padding: "5%" }}>
        <Card.Img width="100%" height="30%" variant="top" src={recipe.image} />
        <Card.Body>
          <Card.Title style={{ margin: "10%" }}>
            <h2>{recipe.name}</h2>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
          <Card.Text>{recipe.description}</Card.Text>
          <Button onClick={() => recipesRend(recipe)}>{btnText}</Button>
        </Card.Body>
      </Card>
  );
}
