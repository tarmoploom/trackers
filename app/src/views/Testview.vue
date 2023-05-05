<template>
    <main>
      <h2>
        <div class="float-child">
        </div>
        <div class="float-child1">
          <br />
          <button class='button1'> BUTTON </button>
        </div>
      </h2>
      <input id="toggle" type="checkbox" checked />
      <div id="expand">
        <section>
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              
            </thead>
          </table>
        </section>
      </div>
      <br />
    </main>
  </template>
  
  <style>
  @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);
  
  body {
    font-family: 'Open Sans', Arial;
    background-image: url(https://user-images.githubusercontent.com/356994/100579048-4e006a80-3298-11eb-8ea0-a7205221f389.gif);
    background-size: 100%;
}
  .button1 {
    font-family: 'Open Sans', Arial;
    color: #939292;
    margin-left: 60%;
  }
  main {
    border-radius: 10px;
    background: rgb(252, 252, 252);
    width: 700px;
    margin: 20px auto;
    padding: 10px 0;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  }
  h2 {
    text-align: center;
  }
  p {
    font-size: 13px;
  }
  input {
    display: none;
    visibility: hidden;
  }
  label {
    display: block;
    padding: 0.5em;
    text-align: center;
    border-bottom: 1px solid #ccc;
    color: #666;
  }
  label:hover {
    color: #000;
  }
  label::before {
    font-family: Consolas, monaco, monospace;
    font-weight: bold;
    font-size: 15px;
    content: '^';
    vertical-align: text-top;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 5px;
    background: radial-gradient(ellipse at center, #ccc 50%, transparent 50%);
  }
  section {
    padding: 0 20px;
  }
  .float-container {
    border: 3px solid #fff;
    padding: 20px;
  }
  .float-child {
    width: 30%;
    float: left;
    padding: 10px;
    padding-left: 50px;
    margin-top: -20px;
  }
  .float-child1 {
    width: 70%;
    float: left;
    padding: 10px;
    padding-top: 30px;
    text-align: left;
    padding-left: 1px;
    font-weight: bold;
    letter-spacing: 1px;
  }
  </style>
  