---
title: "How do you initialize the design if given netlist, SDC, and lib?"
date: 2025-08-20
draft: false
categories: ["Pre-PnR"]
description: ""
---

<p>&nbsp;Configure the tool to find the required library files (.lib,
.lef).</p>

<p class="MsoListParagraphCxSpFirst" style="margin-left: 21.8pt; mso-add-space: auto; mso-list: l2 level1 lfo2; tab-stops: list 21.8pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->Innovus:<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 21.8pt; mso-add-space: auto; mso-list: l2 level1 lfo2; tab-stops: list 21.8pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->ICC2: set_app_var search_path ./libs ;
set_app_var target_library {slow.db} ; set_app_var link_library "*
slow.db" (Specify LEF via read_tech_lef, read_cell_lef or read_ndm)<o:p></o:p></p>

<p class="MsoListParagraphCxSpLast" style="margin-left: 21.8pt; mso-add-space: auto; mso-list: l3 level1 lfo3; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Load Physical Libraries (</b>.lef<b>):</b>
Read the technology LEF and the standard cell/macro LEF files. <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 93.8pt; mso-list: l0 level3 lfo1; tab-stops: list 93.8pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]-->Innovus:
Handled by init_design if paths are set, or read_lef tech.lef cells.lef<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 93.8pt; mso-list: l0 level3 lfo1; tab-stops: list 93.8pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]-->ICC2:
read_tech_lef tech.lef ; read_cell_lef cells.lef (or read_ndm for NDM libraries
which bundle lib/lef)<o:p></o:p></p>

<p class="MsoListParagraph" style="margin-left: 21.8pt; mso-add-space: auto; mso-list: l3 level1 lfo3; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Read the Netlist:</b> Load the synthesized
gate-level Verilog netlist. <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 75.8pt; mso-list: l1 level3 lfo4; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; mso-bidi-font-family: Wingdings; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;
</span></span></span><!--[endif]-->Innovus: read_netlist design.v<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 75.8pt; mso-list: l1 level3 lfo4; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; mso-bidi-font-family: Wingdings; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;
</span></span></span><!--[endif]-->ICC2: read_verilog design.v<o:p></o:p></p>

<p class="MsoListParagraph" style="margin-left: 21.8pt; mso-add-space: auto; mso-list: l3 level1 lfo3; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Initialize the Design / Create Floorplan:</b>
Create the initial design structure and floorplan boundary. This often requires
specifying the top-level module. <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 75.8pt; mso-list: l1 level3 lfo4; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; mso-bidi-font-family: Wingdings; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;
</span></span></span><!--[endif]-->Innovus: init_design (This command often
combines reading LEF, netlist, and creating an initial floorplan). It might
require set init_design_netlist and set init_design_top_cell first.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 75.8pt; mso-list: l1 level3 lfo4; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; mso-bidi-font-family: Wingdings; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;
</span></span></span><!--[endif]-->ICC2: link_design (links the logical netlist to
library definitions); initialize_floorplan (creates the initial floorplan
boundary).<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 39.8pt; mso-list: l1 level2 lfo4; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Apply Timing Constraints:</b> Read the SDC
file to apply timing constraints. <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 75.8pt; mso-list: l1 level3 lfo4; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; mso-bidi-font-family: Wingdings; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;
</span></span></span><!--[endif]-->Innovus: read_sdc design.sdc<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 75.8pt; mso-list: l1 level3 lfo4; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; mso-bidi-font-family: Wingdings; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;
</span></span></span><!--[endif]-->ICC2: read_sdc design.sdc<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 39.8pt; mso-list: l1 level2 lfo4; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>(Optional) Apply Power Intent:</b> If using
UPF/CPF, load these files. <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 75.8pt; mso-list: l1 level3 lfo4; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; mso-bidi-font-family: Wingdings; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;
</span></span></span><!--[endif]-->Innovus: read_upf design.upf<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 75.8pt; mso-list: l1 level3 lfo4; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; mso-bidi-font-family: Wingdings; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;
</span></span></span><!--[endif]-->ICC2: load_upf design.upf ; commit_upf<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 39.8pt; mso-list: l1 level2 lfo4; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Perform Sanity Checks:</b> Run initial check*
commands (e.g., checkDesign, check_timing) to verify the loaded data.<o:p></o:p></p>

<p class="MsoNormal"><o:p>&nbsp;</o:p></p>