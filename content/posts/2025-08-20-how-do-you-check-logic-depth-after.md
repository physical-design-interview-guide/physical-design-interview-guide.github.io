---
title: "How do you check the logic depth after synthesis? How do you report logic depth if PnR tool is not reporting correctly?"
date: 2025-08-20
draft: false
categories: ["Pre-PnR"]
description: ""
---

<p>Scripting:
      Tcl scripts can be written to trace paths between registers (e.g., using
      all_fanin/all_fanout recursively or dedicated path tracing commands) and
      count the number of combinational cells encountered.</p>