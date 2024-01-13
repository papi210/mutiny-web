import { render } from "solid-js/web";

import "./root.css";

import { defineCustomElements } from "@ionic/pwa-elements/loader";

import { Router } from "./router";

const root = document.getElementById("root");

defineCustomElements(window);

render(() => <Router />, root!);
