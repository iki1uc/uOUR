import { Axiom698869 } from "./698869.js";

const NC = {
  B: 0,
  T: 0,
  R: 0,
  O: 0,

  tmp() {
    this.R = Math.sqrt(this.B*this.B + this.T);
    this.O = Math.sin(this.T/10) * this.R;
  },

  axiom() {
    return Axiom698869;
  },

  run() {
    this.T++;
    this.B++;
    this.tmp();

    console.log("B:", this.B, this.R, this.O, this.T);
    console.log("AXIOM:", this.axiom());
  }
};

setInterval(() => NC.run(), 1000);
