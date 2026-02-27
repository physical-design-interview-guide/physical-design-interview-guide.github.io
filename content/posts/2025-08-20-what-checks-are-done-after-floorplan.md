---
title: "What checks are done after floorplan?"
date: 2025-08-20
draft: false
categories: ["Floorplan"]
description: ""
---

<p><b>Area and Utilization: </b>within limit.</p>

<p class="MsoNormal"><b>Macro Placement Legality:</b> Ensure all macros are
placed legally (not overlapping) and are aligned to the site grid.<o:p></o:p></p>

<p class="MsoNormal"><b>Pin Placement:</b> Check that all I/O pins are placed and
that their locations are reasonable for top-level connectivity.<o:p></o:p></p>

<p class="MsoNormal"><b>Early IR Drop Analysis</b>: A static IR drop analysis is
run on the power distribution network (PDN) to check for significant voltage
drops. This helps validate that the power grid structure (straps, rails, and
vias) is robust enough.<o:p></o:p></p>

<p class="MsoNormal"><b>Early Timing Estimation</b> with trial placement of std
cells. This "pre-placement" timing check helps identify if the
floorplan is creating any gross timing violations due to long paths between
connected macros or between macros and I/O pins.<o:p></o:p></p>

<p class="MsoNormal"><b>Physical Verification Checks</b>: Run initial DRC (Design
Rule Checks) on the macros and power grid to ensure there are no fundamental
physical violations</p>