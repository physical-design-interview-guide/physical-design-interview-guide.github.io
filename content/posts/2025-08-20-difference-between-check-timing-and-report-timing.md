---
title: "Difference between check_timing and report_timing"
date: 2025-08-20
draft: false
categories: ["Pre-PnR"]
description: ""
---

<p>&nbsp;Check_timing : It looks for issues in the design and
constraint setup, such as</p>

<p class="MsoNormal"><span>&nbsp;&nbsp; &nbsp;</span>• Unconstrained
endpoints<o:p></o:p></p>

<p class="MsoNormal"><span>&nbsp; &nbsp;&nbsp;</span>• Combinational
feedback loops<o:p></o:p></p>

<p class="MsoNormal"><span>&nbsp;&nbsp; &nbsp;</span>• Empty or unclocked registers</p><p class="MsoNormal"><span>&nbsp;&nbsp; &nbsp;</span>• Generated clocks
with no source</p>

<p class="MsoNormal"><span>&nbsp;&nbsp; &nbsp;</span>• Timing exceptions
(false/multicycle paths) without valid paths<o:p></o:p></p><p class="MsoNormal">Report_timing: Used to check various timing reports like, setup, hold, etc...</p>

<p class="MsoNormal"><o:p>&nbsp;</o:p></p>