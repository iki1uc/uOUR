// MODULE: <B>  (ersetze <B> durch C, D, E, F, G, H, J, K, L, M, N, P)

const NC = {
  B: 0,   // Modulwert
  T: 0,   // Tick
  R: 0,   // Radius
  O: 0,   // Orbit

  tmp() {
    this.R = Math.sqrt(this.B*this.B + this.T);
    this.O = Math.sin(this.T/10) * this.R;
  },

  axiom() {
    return {
      ax: this.B + this.R,
      ay: this.R - this.O,
      az: (this.B + this.T) / 2
    };
  },

  run() {
    this.T++;
    this.B++;
    this.tmp();

    console.log("<B>:", this.B, this.R, this.O, this.T);
    console.log("AXIOM:", this.axiom());
  }
};

setInterval(() => NC.run(), 1000);
