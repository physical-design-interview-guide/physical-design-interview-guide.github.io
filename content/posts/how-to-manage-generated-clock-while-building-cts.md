---
title: "How to manage generated clock while building CTS?"
date: 2025-08-23
draft: false
categories: ["CTS"]
description: "How to handle generated clocks during Clock Tree Synthesis using SDC definitions, automatic tool handling, and exception management."
---

- **Correct SDC Definition:** Correctly define the generated clock in the SDC file, specifying its source pin (master clock) and the division/multiplication logic.

- **Automatic Tool Handling:** The CTS tool reads the SDC and understands the relationship between the master clock and the generated clock.

- **Balancing:** When balancing, the tool traces the generated clock's path back to its source on the master clock's tree. It then balances the latency from the clock source all the way to the sinks of both the master and generated clocks, ensuring they are properly aligned according to their defined relationship.

- **Exception Handling:** You can define generated clocks as part of a separate skew group or mark them as `dont_touch` if you want to exclude them from the primary clock tree build and handle them with a custom structure.
