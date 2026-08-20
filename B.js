// UNIVERSAL-AXIOM-SCHABLONE für uOUR-Module

export const Axiom = {
  MODE: "12-Achs",
  TYPE: "uOUR-Module",
  FORM: "Neutral",
  QUALITY: "Base",

  AXIS: {
    CORE: "<B>",        // zentraler Modulwert
    RADIUS: "R",
    ORBIT: "O",
    TICK: "T",

    EXT1: "E1",
    EXT2: "E2",
    EXT3: "E3"
  },

  OPERATOR: {
    MASTER: "<B>-XI",
    SLAVE:  "<B>-IX",
    MID:    "<B>-X4",
    FLOW:   "<B>-IX → <B>-X4 → <B>-XI"
  },

  PATH: {
    MODE: "linear",
    FULL: "<B> → R → O → T"
  },

  RESONANZ: {
    ORDER: "12",
    LINK:  "uOUR",
    ROOT:  true,
    STATE: "REAL"
  }
};
