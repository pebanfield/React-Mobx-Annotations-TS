import * as React from "react";
import { Provider } from 'mobx-react';
import { render } from "react-dom";
import App from "./components/App";
import SampleStore from "./model/SampleStore"

let ds as SampleStore = new SampleStore();
const rootEl = document.getElementById("root");

render(<Provider sampleStore={ds} anotherSampleStore={}><App /></Provider>, rootEl);
