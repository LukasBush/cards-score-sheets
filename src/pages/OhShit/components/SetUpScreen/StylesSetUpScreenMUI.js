export const StylesSetUpScreenMUI = {
  iconBadge: {
    width: 56,
    height: 56,
    borderRadius: 2.5,
    display: "grid",
    placeItems: "center",
    background:
      "linear-gradient(180deg, rgba(238, 43, 173, 0.18), rgba(238, 43, 173, 0.06))",
    border: "1px solid rgba(238, 43, 173, 0.25)",
    color: "#ee2bad",
  },

  counterBox: {
    display: "grid",
    gridTemplateColumns: "3rem minmax(6.5rem, 1fr) 3rem",
    alignItems: "center",
    gap: "0.75rem",
    width: "100%",
    maxWidth: "22rem",
  },

  counterIcon: {
    height: "3rem",
    width: "3rem",
    p: 0,
    borderRadius: "0.75rem",

    border: "1px solid rgba(238, 43, 173, 0.35)",
    background:
      "linear-gradient(180deg, rgba(40, 10, 35, 0.95), rgba(30, 8, 28, 0.95))",
    boxShadow: "0 6px 20px rgba(238, 43, 173, 0.15)",

    display: "grid",
    placeItems: "center",

    color: "#ee2bad",
  },

  counterValueBox: {
    height: "3rem",
    borderRadius: "0.75rem",

    border: "1px solid rgba(238, 43, 173, 0.35)",
    background:
      "linear-gradient(180deg, rgba(40, 10, 35, 0.95), rgba(30, 8, 28, 0.95))",
    boxShadow: "0 6px 24px rgba(0,0,0,0.4)",

    display: "grid",
    placeItems: "center",
    width: "100%",
  },

  counterValueText: {
    fontSize: "1.25rem",
    fontWeight: 700,
    lineHeight: 1,
    color: "#f1f5f9",
  },

  select: {
    height: "3rem",
    borderRadius: "0.75rem",
    width: "100%",

    background:
      "linear-gradient(180deg, rgba(40, 10, 35, 0.95), rgba(30, 8, 28, 0.95))",
    border: "1px solid rgba(238, 43, 173, 0.28)",
    backdropFilter: "blur(10px)",
    borderColor: "rgba(238, 43, 173, 0.55)",
      boxShadow: "0 14px 42px rgba(238, 43, 173, 0.18)",

    color: "#f1f5f9",

    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },

    "& .MuiSelect-select": {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      padding: "0 3rem 0 1rem",
      height: "3rem",
      fontWeight: 650,
    },

    "& .MuiSelect-icon": {
      right: "0.85rem",
      color: "rgba(241, 245, 249, 0.75)",
      fontSize: "1.6rem",
    },
  },
};
