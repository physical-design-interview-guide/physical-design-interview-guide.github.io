---
title: "What if timing is critical and spreading isn't an option?"
date: 2025-08-20
draft: false
categories: ["Placement"]
description: ""
---

<p></p><p class="MsoNormal">Delay is due to cell and interconnect. When area is
congested, when tool calculates timing, it may consider detour routes, adding
more delay.<o:p></o:p></p>

<p class="MsoNormal">When cells are spreaded just enough to solve congestion, it
may reduce route length as well, helping in congestion and timing both.<o:p></o:p></p>

<p class="MsoNormal">Instead of broad spreading, use more localized techniques:
Apply partial blockages with lower blockage percentages (e.g., 10%) only in the
absolute peak congestion GCells, rather than large areas.<o:p></o:p></p>

<p class="MsoNormal"><b>Guide Routing:</b> routing constraints can be applied
later (during routing stage) to force certain nets onto less congested higher
metal layers<o:p></o:p></p>

<p class="MsoNormal"><b>Timing-Aware Congestion Reduction:</b> Use placement
modes or options that explicitly try to balance timing and congestion
(place_opt -congestion -timing_driven in some tools). The tool will try to
spread cells <i>just enough</i> to ease congestion while minimizing the impact
on critical path delays.</p><p></p>