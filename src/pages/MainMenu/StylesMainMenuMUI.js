export const StylesMainMenuMUI = {
    list: {
        display: "grid",
        gap: 2,
        p: 0,
    },

    listItem: {
        p: 0,
    },

    button: {
        borderRadius: 3,
        px: 2.5,
        py: 2,
        border: "1px solid rgba(238, 43, 173, 0.18)",
        background:
            "linear-gradient(180deg, rgba(40, 10, 35, 0.95), rgba(30, 8, 28, 0.95))",
        boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
        color: "#f1f5f9",
        transition:
            "transform 120ms ease, box-shadow 120ms ease, border-color 120ms ease",

        "&:hover": {
            transform: "translateY(-1px)",
            borderColor: "rgba(238, 43, 173, 0.35)",
            boxShadow: "0 14px 40px rgba(0,0,0,0.45)",
        },

        "&:active": {
            transform: "translateY(0px) scale(0.99)",
        },
    },

    iconBadge: {
        width: 56,
        height: 56,
        borderRadius: 2.5,
        display: "grid",
        placeItems: "center",
        mr: 2,
        background:
            "linear-gradient(180deg, rgba(238, 43, 173, 0.18), rgba(238, 43, 173, 0.06))",
        border: "1px solid rgba(238, 43, 173, 0.25)",
        color: "#ee2bad",
    },

    title: {
        fontWeight: 800,
        fontSize: "1.1rem",
        lineHeight: 1.2,
    },

    chevron: {
        ml: 2,
        fontSize: 28,
        color: "rgba(238, 43, 173, 0.55)",
    }
}