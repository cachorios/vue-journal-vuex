export default {
    name: "daybook",
    component: () =>
        import(
            /*webpackChunkName: "daybook"*/ "@/modules/daybook/layouts/DaybookLayout"
        ),

    children: [
        {
            path: "",
            name: "no-entry",
            component: () =>
                import("@/modules/daybook/views/NoEntrySelected.vue"),
        },
        {
            path: ":id",
            name: "entry",
            component: () => import("@/modules/daybook/views/EntryView.vue"),
        },
    ],
};
