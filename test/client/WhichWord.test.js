import React, { Component } from "react";

import { WhichWord } from "../../client/components/gameComponents/WhichWord";
import { exportAllDeclaration } from "@babel/types";
test("testing parseDefinition parses a noun", () => {
  const expected = (
    <p>
      <i>noun: </i>
      hello
    </p>
  );
  const thing = new WhichWord();
  const actual = thing.parseDefinition("n hello");
  expect(actual).toEqual(expected);
});

test("testing parseDefinition parses a adverb", () => {
  const expected = (
    <p>
      <i>adverb: </i> hello
    </p>
  );
  const thing = new WhichWord();
  const actual = thing.parseDefinition("adv hello");
  expect(actual).toEqual(expected);
});

test("testing parseDefinition parses a adjective", () => {
  const expected = (
    <p>
      <i>adjective: </i> hello
    </p>
  );
  const thing = new WhichWord();
  const actual = thing.parseDefinition("adj hello");
  expect(actual).toEqual(expected);
});

test("testing parseDefinition parses a random string", () => {
  const expected = "yeet";
  const thing = new WhichWord();
  const actual = thing.parseDefinition("yeet");
  expect(actual).toEqual(expected);
});
