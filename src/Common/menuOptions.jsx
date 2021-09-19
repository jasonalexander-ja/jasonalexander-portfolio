import Headlines from '../Pages/Headlines/Headlines'; 
import CV from '../Pages/CV/CV'; 

export const menuOptions = [
    {
        index: 1,
        text: "Home Page",
        code: "home",
        path: "/home",
        component: Headlines
    },
    {
        index: 2,
        text: "Hardware Embedded",
        code: "/hardware-embedded",
        component: () => <></>
    },
    {
        index: 3,
        text: "Web",
        code: "web",
        path: "/web",
        component: () => <></>
    },
    {
        index: 4,
        text: "Rust",
        code: "rust",
        path: "/rust",
        component: () => <></>
    },
    {
        index: 5,
        text: "CPU Design",
        code: "cpu-design",
        path: "/cpu-design",
        component: () => <></>
    },
    {
        index: 6,
        text: "Nottinghack",
        code: "nottinghack",
        path: "/nottinghack",
        component: () => <></>
    },
    {
        index: 7,
        text: "Anvil-Lib",
        code: "anvil-lib",
        path: "/anvil-lib",
        component: () => <></>
    },
    {
        index: 8,
        text: "Norenth",
        code: "norenth",
        path: "/norenth",
        component: () => <></>
    },
    {
        index: 9,
        text: "Contact",
        code: "contact",
        path: "/contact",
        component: () => <></>
    },
    {
        index: 10,
        text: "CV",
        code: "cv",
        path: "/cv",
        component: CV
    },
    {
        index: 11,
        text: "Posts",
        code: "post",
        path: "/post/:id",
        component: () => <></>
    }
];