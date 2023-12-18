/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

import { FunctionComponent } from "preact";
import style from "./pageLoader.css";

export const PageLoader: FunctionComponent = () => (
	<div className={style.progress} />
);
