---
title: "Difference between unresolved reference and blackbox?"
date: 2025-08-21
draft: false
categories: ["General-Concepts"]
description: ""
---

<p>If “MyIP” is instantiated at top level netlist, but if no
definition is found of MyIP, then it becomes unresolved reference.</p>

<p class="MsoNormal" style="text-indent: 21.8pt;">my_module u1 (.clk(clk),
.rst(rst)); // 'my_module' is not defined anywhere in netlist or not found
definition through .lib as well.<o:p></o:p></p>

<p class="MsoNormal"><b>Blackbox:<o:p></o:p></b></p>

<p class="MsoNormal" style="margin-left: 21.8pt;">module my_module (input clk,
input rst);<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 21.8pt;"><span style="mso-spacerun: yes;">&nbsp;
</span>// No internal implementation here<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 21.8pt;">Endmodule<o:p></o:p></p>

<p class="MsoNormal">In this case, my_module is blackbox, as it is defined but
only ports, no internal logic defined.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: -14.2pt;"><span lang="EN-GB" style="mso-ansi-language: EN-GB;"><o:p>&nbsp;</o:p></span></p>